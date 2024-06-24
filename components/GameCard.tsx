import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Game, getSingleGame } from "@/lib/games";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { AspectRatio } from "./ui/aspect-ratio";
import { notFound } from "next/navigation";

type GameCardProps = {
    className?: string;
    game: Game;
};

export default async function GameCard({ className, game }: GameCardProps) {
    return (
        <Card className={cn("overflow-hidden border-0", className)}>
            <CardHeader className="p-0">
                <AspectRatio ratio={16 / 9}>
                    <Image
                        src={game.thumbnail}
                        width={400}
                        height={400}
                        alt={game.title}
                    ></Image>
                </AspectRatio>
            </CardHeader>
            <CardContent className="p-4 pt-6 pb-0">
                <h2 className="font-medium text-2xl line-clamp-1">
                    {game.title}
                </h2>
                <p className="text-sm text-zinc-600 line-clamp-1">
                    {game.publisher} & {game.developer}
                </p>
                <Separator className="max-w-20 my-4" />
                <p className="text-sm line-clamp-2 text-zinc-400">
                    {game.short_description}
                </p>
            </CardContent>
            <CardFooter className="p-4 pb-6">
                <Badge className="bg-main uppercase mr-3">free</Badge>
                <Badge variant="secondary" className="uppercase">
                    {game.genre}
                </Badge>
            </CardFooter>
        </Card>
    );
}
