import GameCategoriesSideBar from "@/components/GameCategoriesSideBar";
import { getGames } from "@/lib/games";

type PageProps = {
    params: {
        genre: string;
    };
};
export default async function Page({ params }: PageProps) {
    const { genre } = params;

    const games = await getGames(genre);

    return <GameCategoriesSideBar games={games} />;
}
