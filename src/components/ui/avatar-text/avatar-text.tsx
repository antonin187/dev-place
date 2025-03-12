"use client";

import { GithubIcon, Instagram, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Button } from "../button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../drawer";
import Image from "next/image";

// Define the props interface
interface AvatarTextProps {
  imgLink: string; // Define the type for imgLink
  fallback: string; // Define the type for fallback
  fullName: string; // Define the type for fullName
  status?: string; // Define the type for status (optional)
}

export default function AvatarText({
  imgLink,
  fallback,
  fullName,
  status,
}: AvatarTextProps) {
  
  const navigateToLink = (link: string) => {
    window.open(link);
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex items-center gap-2 w-fit">
          <Avatar className="w-10 h-10">
            <AvatarImage src={imgLink} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
          <div className="leading-tight text-sm">
            <p className="font-semibold">{fullName}</p>
            <p className="text-muted-foreground">{status}</p>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
          <img src={imgLink} />
            <DrawerTitle className="text-center text-4xl">
              {fullName}
            </DrawerTitle>
            <DrawerDescription className="text-center">
              {status}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex gap-2 p-4">
            <Button className="grow" variant="outline" size="icon" onClick={() => navigateToLink("https://github.com/antonin187")}><GithubIcon /></Button>
            <Button className="grow" variant="outline" size="icon" onClick={() => navigateToLink("https://www.instagram.com/illbeanton/")}><Instagram /></Button>
            <Button className="grow" variant="outline" size="icon" onClick={() => navigateToLink("https://www.google.com")}><Linkedin /></Button>
          </div>
          <DrawerFooter>
            <Button onClick={() => window.open("https://antoninsimon.fr/", "_blank")}>Voir le site web</Button>
            <DrawerClose asChild>
              <Button variant="secondary">Fermer</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
