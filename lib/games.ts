import { sleep } from "./utils";

export type Game = {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    publisher: string;
    developer: string;
};

export type GameDetails = Game & {
    description: string;
    game_url: string;
    release_date: string;
    minimum_system_requirements: Requirement;
    screenshots: Image[];
};

type Requirement = {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
};

type Image = {
    id: string;
    image: string;
};

export const getGames = async (genre?: string) => {
    await sleep(1500);
    const response = await fetch(
        `https://www.freetogame.com/api/games?platform=pc&sort-by=release-date ${
            genre ? `&category=${genre}` : ""
        }`
    );
    const games = await response.json();
    return response.status === 200 ? (games as Game[]) : [];
};

export const getSingleGame = async (gameId: number) => {
    const response = await fetch(
        `https://www.freetogame.com/api/game?id=${gameId}`
    );
    const game = await response.json();
    return response.status === 200 ? (game as GameDetails) : "";

    return game as GameDetails;
};
