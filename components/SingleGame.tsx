import type { GameDetails as GameDetailsType } from "@/lib/games";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GameDetails from "./GameDetails";
import { buttonVariants } from "./ui/button";

type SingleGameProps = {
    game: GameDetailsType;
};

export default function SingleGame({ game }: SingleGameProps) {
    return (
        <main className="flex gap-9">
            <div className="w-1/2 max-w-80">
                <div className="flex flex-col gap-4">
                    <AspectRatio
                        ratio={16 / 9}
                        className="rounded-lg overflow-hidden"
                    >
                        <Image
                            src={game.thumbnail}
                            width={700}
                            height={700}
                            alt={game.title}
                        />
                    </AspectRatio>
                    <Link
                        href={game.game_url}
                        target="_blank"
                        className={cn(
                            buttonVariants({ variant: "outline" }),
                            "w-full bg-green-700 bg-opacity-10 border-green-600 border-opacity-30",
                            "hover:bg-green-700 hover:bg-opacity-10 hover:border-green-600"
                        )}
                    >
                        PLAY NOW FOR FREE
                        <ArrowUpRight width={20} className="ml-2" />
                    </Link>
                </div>
            </div>

            <GameDetails game={game} />
        </main>
    );
}
