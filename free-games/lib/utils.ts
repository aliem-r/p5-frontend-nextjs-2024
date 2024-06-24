import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function imageExists(imageUrl: string) {
    const response = await fetch(imageUrl, {
        method: "HEAD",
        redirect: "manual",
    });
    return response.status === 200;
}
