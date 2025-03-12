"use client";
import { GithubIcon, Instagram, Linkedin } from "lucide-react";
import { Button } from "../button";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center bg-white items-center border mt-6">
      <section className="flex flex-col w-full h-full pt-8 sm:pt-16 px-4 sm:px-28 gap-6 sm:gap-4">
        <p className="text-4xl sm:text-6xl tracking-tighter font-semibold w-full text-center sm:text-left">C&apos;est la fin.</p>
        <p className="text-justify sm:text-left text-sm sm:text-lg">
          Développeur fullstack passionné, étudiant et créateur de ce blog. Ici,
          je partage mes connaissances et découvertes en développement
          informatique.
        </p>
        <div className="flex sm:flex-row flex-col justify-center gap-2 w-full my-3 sm:my-6">
          <Button
            variant="secondary"
            onClick={() => window.open("https://github.com/antonin187", "_blank")}
          >
            <GithubIcon />
            antonin187
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.open("https://www.instagram.com/illbeanton", "_blank")}
          >
            <Instagram />
            illbeanton
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.open("https://www.linkedin.com/in/antonin-simon", "_blank")}
          >
            <Linkedin />
            Antonin SIMON
          </Button>
        </div>
      </section>
      <div className="border-t w-full my-4 border-dashed" />
      <div className="text-center text-sm text-gray-500 mb-4">
        © 2025 Antonin SIMON. Tous droits réservés.
      </div>
    </footer>
  );
}
