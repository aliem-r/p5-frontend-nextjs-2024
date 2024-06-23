import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Free Games",
    description: "The best free-to-play games",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={cn(
                    font.className,
                    "min-h-screen max-w-[1240px] m-auto p-6",
                    "flex flex-col flex-1",
                    "bg-gradient-to-b from-neutral-950 to-[200px]",
                    "text-balance"
                )}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
