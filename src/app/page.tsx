import { getPublishedPosts, getRecentPosts } from "@/api-call/posts";
import { Button } from "@/components/ui/button";
import PostCard from "@/components/ui/post-card/post-card";
import { PostType } from "@/types/post";
import { Glasses } from "lucide-react";

export default async function Home() {
  const posts = await getPublishedPosts();
  const recentPosts = await getRecentPosts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-customGrey via-30% to-customGrey">
      <section className="flex flex-col justify-center items-center py-20 gap-10">
        <div>
          <p className="text-xl tracking-tighter font-semibold text-center mb-2">
            Bonjour, bienvenue sur
          </p>
          <h1 className="text-7xl sm:text-8xl tracking-tighter font-semibold text-center">
            dev-place
          </h1>
        </div>
        <h2 className="text-muted-foreground text-xl flex flex-col items-center gap-2 text-center">
          Vous trouverez des articles divers et variés autour du développement
          informatique.
        </h2>
        <div className="flex gap-2">
          <a href="#all-posts">
            <Button variant="secondary">
              <Glasses /> Bonne lecture !
            </Button>
          </a>
        </div>
      </section>
      <section id="recent-posts">
        <h2 className="text-3xl tracking-tighter font-semibold px-5">
          Articles récents
        </h2>
        <div className="flex flex-row gap-4 w-full overflow-x-auto whitespace-nowrap px-5 py-10">
          {recentPosts.map((post: PostType, index: number) => (
            <PostCard key={index} post={post} className="w-full sm:w-4/12" />
          ))}
        </div>
      </section>
      <section id="all-posts" className="mt-16 ">
        <h2 className="text-3xl tracking-tighter font-semibold px-5">
          Tous les articles
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-5 pt-10">
          {posts.map((post: PostType, index: number) => (
            <PostCard key={index} post={post} className="w-full" />
          ))}
        </div>
      </section>
    </div>
  );
}
