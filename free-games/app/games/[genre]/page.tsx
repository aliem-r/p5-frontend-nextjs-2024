import GameCard from "@/components/GameCard";
import { getGames } from "@/lib/games";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PageProps = {
    params: {
        genre: string;
    };
};
export default async function Page({ params }: PageProps) {
    const { genre } = params;
    const games = await getGames(genre);

    return (
        <div className={"grid grid-cols-2 gap-9"}>
            {games.map((game) => (
                <Link href={`/game/${game.id}`} categorieKey={game.id}>
                    <GameCard
                        className={cn(
                            "transition-all ease-in-out",
                            "bg-zinc-800 bg-opacity-10 outline outline-1 outline-zinc-800",
                            "hover:bg-zinc-900 hover:outline-zinc-700"
                        )}
                        gameId={game.id}
                    ></GameCard>
                </Link>
            ))}
        </div>
    );
}
