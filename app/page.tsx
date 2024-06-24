import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dices, Gamepad } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main
            className={
                "flex-1 flex flex-col items-center justify-center gap-12"
            }
        >
            <Link href="/">
                <Image
                    src="/images/free-games-logo.svg"
                    width={500}
                    height={100}
                    alt="logo"
                ></Image>
            </Link>
            <div className="flex justify-center gap-6">
                <Link
                    href={"/games"}
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "outline-btn"
                    )}
                >
                    All games <Gamepad width={20} className="ml-3" />
                </Link>
                <Link
                    href={"/game"}
                    className={cn(
                        buttonVariants({ variant: "outline" }),
                        "outline-btn"
                    )}
                >
                    Random game <Dices width={20} className="ml-3" />
                </Link>
            </div>
        </main>
    );
}
