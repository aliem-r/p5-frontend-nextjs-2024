import { Frown } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 | Not found",
};
export default function NotFound() {
    return (
        <main
            className={
                "flex-1 flex flex-col items-center justify-center gap-12"
            }
        >
            <Image
                src="/images/404.png"
                width={500}
                height={100}
                alt="404"
            ></Image>
            <p className="text-2xl flex items-center gap-2">
                Page not found <Frown />
            </p>
        </main>
    );
}
