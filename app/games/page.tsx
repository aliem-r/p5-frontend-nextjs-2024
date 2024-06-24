import GameCards from "@/components/GameCards";
import { getGames } from "@/lib/games";

type PageProps = {
    params: {
        genre: string;
    };
};
export default async function Page({ params }: PageProps) {
    const { genre } = params;

    const games = await getGames(genre);

    return <GameCards games={games} />;
}
