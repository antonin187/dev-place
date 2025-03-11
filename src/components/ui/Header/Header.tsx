"use client";
import { useRouter } from "next/navigation";
import SearchButton from "../SearchButton/SearchButton";

export default function Header() {
    const router = useRouter();
    return (
        <header className="flex justify-between items-center bg-white px-4 sm:px-12 py-2 border fixed inset-x-0 h-14 z-50">
            <h1 className="sm:text-2xl text-xl tracking-tighter font-medium hover:cursor-pointer" onClick={() => router.push("/")}>dev-place</h1>
            <SearchButton />
        </header>
    )
}