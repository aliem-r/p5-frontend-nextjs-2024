import GameCategories from "@/components/GameCategories";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type LayoutProps = {
    children: React.ReactNode;
};

export default async function GameCategoriesLayout({ children }: LayoutProps) {
    const categories = {
        mmorpg: "MMORPG",
        shooter: "Shooter",
        moba: "MOBA",
        anime: "Anime",
        "battle-royale": "Battle Royale",
        strategy: "Strategy",
        fantasy: "Fantasy",
        "sci-fi": "Sci-Fi",
        card: "Card Games",
        racing: "Racing",
        fighting: "Fighting",
        social: "Social",
        sports: "Sports",
    };

    return (
        <main className="flex gap-9">
            <div className="w-1/2 max-w-80">
                <div
                    className={cn(
                        "flex flex-col gap-4",
                        "p-5 pb-6",
                        "bg-zinc-800 bg-opacity-10",
                        "rounded-xl border-solid border-[1px] border-zinc-800"
                    )}
                >
                    <h2 className="font-medium text-2xl">Categories</h2>
                    <Separator />
                    <GameCategories
                        categories={categories}
                        className={cn("")}
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">{children}</div>
        </main>
    );
}
