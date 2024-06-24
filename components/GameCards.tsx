import Link from "next/link";
import GameCard from "./GameCard";
import { cn, range } from "@/lib/utils";
import { Game } from "@/lib/games";

type GameCategoriesSideBarParams = {
    games: Game[];
};

export default function GameCards({ games }: GameCategoriesSideBarParams) {
    return (
        <div className={"grid grid-cols-2 gap-9"}>
            {games.map((game, i) => (
                <Link href={`/game/${game.id}`} className="flex">
                    <GameCard
                        className={cn(
                            "flex-1 flex-col justify-between transition-all ease-in-out",
                            "bg-zinc-800 bg-opacity-10 outline outline-1 outline-zinc-800",
                            "hover:bg-zinc-900 hover:outline-zinc-700"
                        )}
                        game={game}
                    ></GameCard>
                </Link>
            ))}
        </div>
    );
}
