"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type categoriesProps = {
    className?: string;
    categories: Record<string, string>;
};
export default function GameCategories({
    className,
    categories,
}: categoriesProps) {
    const currentPath = usePathname();

    const ListItem = ({
        categorie,
        categorieKey,
    }: {
        categorie: string;
        categorieKey: string;
    }) => {
        const path = categorieKey ? `/games/${categorieKey}` : "/games";
        return (
            <li>
                <Link
                    className={cn(
                        "transition-all ease-in-out",
                        "bg-zinc-900 bg-opacity-30 line-clamp-1",
                        "p-1 px-3 rounded-md ",
                        "hover:bg-zinc-900 hover:outline outline-1 outline-zinc-700",
                        "text-base uppercase",
                        currentPath === path &&
                            "bg-zinc-900 outline outline-zinc-500"
                    )}
                    href={path}
                >
                    {categorie}
                </Link>
            </li>
        );
    };

    return (
        <ul className={cn("flex flex-col gap-3", className)}>
            <ListItem categorie={"All Games"} categorieKey={""} />
            {Object.keys(categories).map((key) => (
                <ListItem categorie={categories[key]} categorieKey={key} />
            ))}
        </ul>
    );
}
