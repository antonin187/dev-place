"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundPost() {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/`);
  };
  return (
    <section className="w-screen h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="text-4xl sm:text-6xl tracking-tighter font-semibold text-center">
        Article introuvable
      </h1>
      <Button onClick={handleClick}>Revenir à l&apos;accueil</Button>
    </section>
  );
}
