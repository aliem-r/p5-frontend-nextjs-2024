import { cn } from "@/lib/utils";
import { Sidebar } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";

type categoriesProps = {
    className?: string;
    categories: Record<string, string>;
};
export default function GameCategories({
    className,
    categories,
}: categoriesProps) {
    const ListItem = ({
        categorie,
        categorieKey,
    }: {
        categorie: string;
        categorieKey: string;
    }) => {
        return (
            <li categorieKey={categorieKey}>
                <Link
                    className={cn(
                        "transition-all ease-in-out",
                        "bg-zinc-900 bg-opacity-30 line-clamp-1",
                        "p-1 px-3 rounded-md ",
                        "hover:bg-zinc-900 hover:outline outline-1 outline-zinc-700",
                        "text-base uppercase"
                    )}
                    href={`/games/${categorieKey}`}
                >
                    {categorie}
                </Link>
            </li>
        );
    };

    return (
        <ul className={cn("flex flex-col gap-3", className)}>
            {/* <ListItem categorie={categories[key]} key={key} /> */}
            {Object.keys(categories).map((key) => (
                <ListItem categorie={categories[key]} categorieKey={key} />
            ))}
        </ul>
    );
}
