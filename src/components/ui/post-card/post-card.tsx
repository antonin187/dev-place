"use client";
import { colorTagClasses, colorTags } from "@/utils/color";
import { Badge } from "../badge";
import { Button } from "../button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";
import { generateSlug } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

// Define the props interface
interface PostCardProps {
  post: PostType; // Define the type for post
  className?: string; // Define the type for style (optional)
}

export default function PostCard({ post, className }: PostCardProps) {
  // Destructure props
  const router = useRouter();
  const slug = generateSlug(post.name);

  const handleClick = () => {
    router.push(`/post/${slug}`);
  };
  return (
    <div className={`relative ${className} p-[3px] group`} onClick={handleClick}>
      {/* Élément de fond avec le gradient */}
      <div className="absolute inset-0 opacity-0 conicGradient after:rounded-[0.92rem] before:rounded-xl group-hover:opacity-100 ease-out duration-300 group-active:scale-[98%]" />

      {/* Carte ShadCN */}
      <Card
        className={`flex flex-col relative z-10 bg-customGrey hover:bg-white hover:cursor-pointer transition duration-300 shadow-none hover:shadow-sm group-active:scale-[98%] overflow-hidden`}
      >
        <CardHeader className="flex-grow">
          <img src={post.cover} className="h-40 rounded-lg object-cover mb-5" />
          <CardTitle className="font-bold text-3xl w-full truncate">
            {post.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="truncate text-sm text-muted-foreground w-full">
            {post.description}
          </p>
          <div className="flex gap-1">
            {post.propertyTags.map((tag, index) => (
              <Badge
                key={index}
                className={colorTagClasses[colorTags[tag.toLowerCase()]]}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-row justify-between items-end w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 flex-wrap">
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://avatars.githubusercontent.com/u/63653412?v=4" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">
                Publié le{" "}
                {post.publishedAt?.start
                  ? new Date(post.publishedAt.start).toLocaleDateString()
                  : ""}
                , par {post.createdBy}
              </span>
            </div>
            <Button onClick={handleClick}>Voir</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
