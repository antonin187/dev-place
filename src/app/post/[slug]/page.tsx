import { getPost } from "@/api-call/posts";
import { Badge } from "@/components/ui/badge";
import CustomCodeBlock from "@/components/ui/copy-block/copy-block";
import { Separator } from "@/components/ui/separator";
import {
  colorCalloutClasses,
  colorTagClasses,
  colorTags,
  colorTextClasses,
} from "@/utils/color";
import AvatarText from "@/components/ui/avatar-text/avatar-text";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import NotFoundPost from "../../../views/NotFoundPost/NotFoundPost";
import { Home } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { Annotations, Blocktype, TextBlock } from "@/types/post";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Article non trouvé",
      description: "L'article demandé est introuvable.",
    };
  }

  return {
    title: post.name,
    description: post.description || "Découvrez notre dernier article sur le développement.",
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug);

  // ⛔ Si le post n'existe pas, on affiche un message d'erreur
  if (!post) {
    return <NotFoundPost />;
  }

  return (
    // <div className="px-36">
    <div className="px-6 sm:px-12 bg-gradient-to-b from-white to-customGrey pt-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Button variant="outline" size="icon">
                <Home />
              </Button>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
          <BreadcrumbPage className="block sm:hidden">{post.name.length > 42 ? `${post.name.substring(0, 42)}...` : post.name}</BreadcrumbPage>
          <BreadcrumbPage className="hidden sm:block">{post.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* header de post */}
      <div className="flex flex-col sm:flex-row pb-10">
        <section className="flex flex-col justify-center pr-0 sm:pr-20 gap-5 w-full sm:w-4/6">
          <div className="flex gap-1 items-start w-full flex-wrap mt-4 sm:mt-0">
            {post.propertyTags.map((tag: string, index: number) => (
              <Badge
                key={index}
                className={colorTagClasses[colorTags[tag.toLowerCase()]]}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl sm:text-6xl tracking-tighter font-semibold">
            {post.name}
          </h1>
          <h2 className="text-muted-foreground">{post.description}</h2>
        <img

           id="img-mobile"
           className="object-cover h-80 w-full rounded-lg sm:hidden"
           src={post.cover}
           alt="Post Cover"
         />
          <div className="w-full flex flex-col gap-4">
            <p className="text-muted-foreground text-xs">
              Publié le{" "}
              {post.publishedAt?.start
                ? new Date(post.publishedAt.start).toLocaleDateString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' })
                : ""}
            </p>
            <AvatarText
              fullName={post.createdBy}
              fallback="AS"
              imgLink="https://avatars.githubusercontent.com/u/63653412?v=4"
              status="Développeur Fullstack"
            />
          </div>
        </section>
        <img
          id="img-web"
          src={post.cover}
          className="object-cover h-80 w-2/6 rounded-lg hidden sm:block"
          alt="Post Cover"
        />
      </div>
      <Separator className="sm:hidden" />
      <section className="flex flex-col gap-3 sm:mt-10 sm:px-56 sm:py-4 rounded-2xl sm:border">
        {post.blocks.length > 0 &&
          post.blocks.map((block: Blocktype, index: number) =>
            printMyBlock(block, index)
          )}
      </section>
    </div>
  );
}

const printMyBlock = (block: Blocktype, index: number) => {
  switch (block.type) {
    case "heading_1":
      return (
        <h1 key={index} className="text-3xl sm:text-4xl tracking-tighter font-bold mt-10">
          {renderBlockContent(block.content.text)}
        </h1>
      );
    case "heading_2":
      return (
        <h2 key={index} className="text-2xl sm:text-3xl tracking-tighter font-bold mt-8">
          {renderBlockContent(block.content.text)}
        </h2>
      );
    case "heading_3":
      return (
        <h3 key={index} className="text-xl sm:text-2xl tracking-tighter font-bold mt-4">
          {renderBlockContent(block.content.text)}
        </h3>
      );
    case "paragraph":
      return <div key={index} className="sm:text-lg" >{renderBlockContent(block.content.text || undefined)}</div>;
    case "code":
      return (
        <div key={index} className="rounded-lg overflow-hidden">
          <CustomCodeBlock
            code={block.content.text?.[0]?.plain_text || ""}
            language="javascript"
          />
        </div>
        //     <CodeBlockx
        //   text={block.content.text?.[0]?.plain_text!}
        //   language="swift"
        //   showLineNumbers
        //   theme={dracula}
        // />
      );
    case "quote":
      return (
        <div
          key={index}
          className={`flex flex-row gap-5  ${
            colorCalloutClasses[block.content.color!]
          }`}
        >
          <div key={index} className="bg-primary w-1" />
          <p className="flex-grow pr-2 py-2 sm:text-lg">
            {renderBlockContent(block.content.text)}
          </p>
        </div>
      );

    case "callout":
      return (
        <div
          key={index}
          className={`${
            colorCalloutClasses[block.content.color!]
          } p-5 flex gap-4 rounded-sm sm:text-lg`}
        >
          <div>{block.content.icon?.emoji}</div>
          <div>{renderBlockContent(block.content.text)}</div>
        </div>
      );
    case "bulleted_list_item":
      return <li key={index} className="sm:text-lg">{renderBlockContent(block.content.text)}</li>;
    case "numbered_list_item":
      return <li key={index} className="sm:text-lg">{renderBlockContent(block.content.text)}</li>;

    case "divider":
      return <Separator key={index} />;

    default:
      return <div key={index}>block</div>;
  }
};

const renderBlockContent = (text: TextBlock[] | undefined) => {
  return (
    <>
      {text?.map((text, index) => {
        const isCode = text.annotations.code;
        const content = isCode ? (
          <code
            key={index}
            className={`px-2 bg-gray-200 rounded-sm py-[2px] font-bold text-red-400 ${
              text.text.link ? "underline underline-offset-2" : ""
            }`}
          >
            {text.text.content}
          </code>
        ) : (
          <span
            key={index}
            className={annotionsStyle(text.annotations, !!text.text.link)}
          >
            {text.text.content}
          </span>
        );

        return text.text.link ? (
          <a key={index} href={text.text.link.url}>
            {content}
          </a>
        ) : (
          content
        );
      })}
    </>
  );
};

const annotionsStyle = (annotations: Annotations, isLink: boolean) => {
  return `${annotations.bold && "font-bold"} ${
    annotations.italic && "italic"
  } ${(annotations.underline || isLink) && "underline underline-offset-2"} ${
    annotations.strikethrough && "line-through"
  } ${colorTextClasses[annotations.color]}`;
};
