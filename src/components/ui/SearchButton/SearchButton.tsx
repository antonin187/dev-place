"use client";
import { Home } from "lucide-react";
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../command";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "../dialog";
import { useState, useEffect, useCallback } from "react";
import { getPublishedPosts } from "@/api-call/posts";
import { Skeleton } from "../skeleton";
import { useRouter } from "next/navigation";
import { Badge } from "../badge";
import { colorTagClasses, colorTags } from "@/utils/color";
import { PostType } from "@/types/post";

export default function SearchButton() {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  const router = useRouter();

  const fetchPosts = async () => {
    setIsLoaded(false);
    try {
      const response = await getPublishedPosts();
      setPosts(response as PostType[]);
      setIsLoaded(true);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erreur API :", error.message);
      } else {
        console.error("Erreur API :", error);
      }
      setIsLoaded(true);
      setPosts([]);
    }
  };

  const openTheCommand = useCallback(() => {
    fetchPosts();
    setOpen((open) => !open);
  }, []);

  const handleSelect = (slug: string) => {
    router.push(slug);
    setOpen(false);
  };

  // Rendering methods
  const commandsRendering = () => {
    if (!isLoaded) {
      return (
        <>
          {[...Array(3)].map((_, index) => (
            <CommandItem key={index} className="flex flex-col items-start">
              <Skeleton className="h-8 w-[250px]" />
              <Skeleton className="h-2 w-full" />
              <Skeleton className="h-2 w-2/3" />
            </CommandItem>
          ))}
        </>
      );
    } else {
      if (posts.length > 0) {
        return posts.map((post, index) => (
          <CommandItem
            key={index}
            onSelect={() => handleSelect(`/post/${post.slug}`)}
            className="flex flex-col items-start"
          >
            <span className="text-base">{post.name}</span>
            <div className="flex gap-1">
              {post.propertyTags.map((tag, index) => (
                <Badge
                  key={index}
                  className={colorTagClasses[colorTags[tag.toLowerCase()]]}
                  variant={"small"}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CommandItem>
        ));
      } else {
        return <p>Aucun articles trouvés</p>;
      }
    }
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        openTheCommand();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [openTheCommand]);

  return (
    <>
      <button
        onClickCapture={() => openTheCommand()}
        // variant="secondary"
        className="bg-customGrey border flex gap-10 p-[0.35rem] rounded-lg"
        onClick={() => setOpen(true)}
      >
        <p className="text-sm text-muted-foreground ml-3">
          Chercher un article...{" "}
        </p>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <VisuallyHidden>
          <DialogTitle>Trouver un article</DialogTitle>
        </VisuallyHidden>
        <CommandInput placeholder="Rechercher un article..." />
        <CommandList>
          <CommandGroup heading="Raccourcis">
            <CommandItem onSelect={() => handleSelect("/")}>
              <Home /> <span className="text-base">Revenir à l&apos;accueil</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tous les articles">
            {commandsRendering()}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
