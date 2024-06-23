import Link from "next/link";
import GameCard from "./GameCard";
import { cn } from "@/lib/utils";
import { Game } from "@/lib/games";

type GameCategoriesSideBarParams = {
    games: Game[];
};

export default function GameCategoriesSideBar({
    games,
}: GameCategoriesSideBarParams) {
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
