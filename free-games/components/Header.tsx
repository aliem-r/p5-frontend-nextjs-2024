"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Dices, Gamepad } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    return (
        !isHome && (
            <header className="h-52">
                <div className="flex items-center justify-between">
                    <span className="flex gap-4 text-zinc-400">
                        <Link href="/">
                            <Image
                                src="/images/free-games-logo.svg"
                                width={200}
                                height={0}
                                alt="logo"
                            ></Image>
                        </Link>
                        <span>|</span>
                        <span>The best free-to-play games</span>
                    </span>
                    <nav className="flex gap-4">
                        <Link
                            href={"/games"}
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "bg-transparent border-white border-opacity-20 hover:bg-white hover:bg-opacity-5 hover:border-opacity-40"
                            )}
                        >
                            All games <Gamepad width={20} className="ml-3" />
                        </Link>
                        <Link
                            href={"#"}
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "bg-transparent border-white border-opacity-20 hover:bg-white hover:bg-opacity-5 hover:border-opacity-40"
                            )}
                        >
                            Random game <Dices width={20} className="ml-3" />
                        </Link>
                    </nav>
                </div>
            </header>
        )
    );
}
