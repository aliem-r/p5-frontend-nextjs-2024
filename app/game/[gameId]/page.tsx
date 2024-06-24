import SingleGame from "@/components/SingleGame";
import { getSingleGame } from "@/lib/games";
import { notFound } from "next/navigation";

type PageProps = {
    params: {
        gameId: number;
    };
};
export default async function Page({ params }: PageProps) {
    const { gameId } = params;

    const game = await getSingleGame(gameId);

    if (!game) notFound();

    return <SingleGame game={game} />;
}
