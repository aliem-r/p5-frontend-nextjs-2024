import GameCategoriesSideBar from "@/components/GameCategoriesSideBar";
import { getGames } from "@/lib/games";
import { notFound } from "next/navigation";

type PageProps = {
    params: {
        genre: string;
    };
};
export default async function Page({ params }: PageProps) {
    const { genre } = params;

    const games = await getGames(genre);

    if (!games.length) notFound();

    return <GameCategoriesSideBar games={games} />;
}
