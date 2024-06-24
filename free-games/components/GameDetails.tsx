import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import type { GameDetails } from "@/lib/games";
import { cn, imageExists } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

type GameProps = {
    game: GameDetails;
};

export default function GameDetails({ game }: GameProps) {
    return (
        <div
            className={cn(
                "flex-1 flex flex-col gap-4",
                "p-5 pb-6",
                "bg-zinc-800 bg-opacity-10",
                "rounded-xl border-solid border-[1px] border-zinc-800"
            )}
        >
            <h2 className="font-medium text-3xl">{game.title}</h2>
            <Separator className="w-full h-[1px] bg-gradient-to-r from-zinc-700" />
            {game.description.split("\r\n\r\n").map((line) => (
                <p className="text-sm text-zinc-400">{line}</p>
            ))}
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full mt-6"
            >
                <CarouselContent>
                    {game.screenshots.map(async (screenshots, index) => {
                        const validImage = await imageExists(screenshots.image);
                        if (!validImage) return;
                        return (
                            <CarouselItem>
                                <AspectRatio
                                    ratio={16 / 9}
                                    className="rounded-lg overflow-hidden"
                                >
                                    <Image
                                        src={screenshots.image}
                                        alt={game.title}
                                        width={800}
                                        height={700}
                                    />
                                </AspectRatio>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
                <CarouselPrevious className="left-[10px] w-7 h-7" />
                <CarouselNext className="right-[10px] w-7 h-7" />
            </Carousel>
            <div className="rounded-lg shadow-[0_0_0_1px] shadow-zinc-800  mt-6">
                <Table>
                    <TableBody>
                        <TableRow className="text-1 hover:bg-inherit">
                            <TableCell className="w-1/4 text-zinc-600 border-r-[1px] border-zinc-800">
                                Title
                            </TableCell>
                            <TableCell className="text-zinc-400  pl-4">
                                {game.title}
                            </TableCell>
                        </TableRow>
                        <TableRow className="text-1 hover:bg-inherit">
                            <TableCell className="w-1/4 text-zinc-600 border-r-[1px] border-zinc-800">
                                Developer & Publisher
                            </TableCell>
                            <TableCell className="text-zinc-400 pl-4">
                                {game.developer + " & " + game.publisher}
                            </TableCell>
                        </TableRow>
                        <TableRow className="text-1 hover:bg-inherit">
                            <TableCell className="w-1/4 text-zinc-600 border-r-[1px] border-zinc-800">
                                Release Date
                            </TableCell>
                            <TableCell className="text-zinc-400 pl-4">
                                {game.release_date}
                            </TableCell>
                        </TableRow>
                        <TableRow className="text-1 hover:bg-inherit">
                            <TableCell className="w-1/4 text-zinc-600 border-r-[1px] border-zinc-800">
                                Genre
                            </TableCell>
                            <TableCell className="text-zinc-400 pl-4">
                                {game.genre}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <div className="rounded-lg shadow-[0_0_0_1px] shadow-zinc-800 mt-6">
                <Table>
                    <TableBody>
                        <TableRow className="text-1 hover:bg-inherit">
                            <TableCell className="w-1/4 text-zinc-600 border-r-[1px] border-zinc-800">
                                OS
                            </TableCell>
                            <TableCell className="text-zinc-400 pl-4">
                                {game.minimum_system_requirements.os}
                            </TableCell>
                        </TableRow>
                        <TableRow className="text-1 hover:bg-inherit">
                            <TableCell className="w-1/4 text-zinc-600 border-r-[1px] border-zinc-800">
                                Processor
                            </TableCell>
                            <TableCell className="text-zinc-400 pl-4">
                                {game.minimum_system_requirements.processor}
                            </TableCell>
                        </TableRow>
                        <TableRow className="text-1 hover:bg-inherit">
                            <TableCell className="w-1/4 text-zinc-600 border-r-[1px] border-zinc-800">
                                Memory
                            </TableCell>
                            <TableCell className="text-zinc-400 pl-4">
                                {game.minimum_system_requirements.memory}
                            </TableCell>
                        </TableRow>
                        <TableRow className="text-1 hover:bg-inherit">
                            <TableCell className="w-1/4 text-zinc-600 border-r-[1px] border-zinc-800">
                                Graphics
                            </TableCell>
                            <TableCell className="text-zinc-400 pl-4">
                                {game.minimum_system_requirements.graphics}
                            </TableCell>
                        </TableRow>
                        <TableRow className="text-1 hover:bg-inherit">
                            <TableCell className="w-1/4 text-zinc-600 border-r-[1px] border-zinc-800">
                                Storage
                            </TableCell>
                            <TableCell className="text-zinc-400 pl-4">
                                {game.minimum_system_requirements.storage}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
