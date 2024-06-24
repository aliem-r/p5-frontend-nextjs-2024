import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="flex gap-9">
            <div className="w-1/2 max-w-80">
                <div className="flex flex-col gap-4">
                    <Skeleton>
                        <AspectRatio
                            ratio={16 / 9}
                            className="rounded-lg overflow-hidden"
                        />
                    </Skeleton>
                    <Skeleton className="w-full h-[36px]"></Skeleton>
                </div>
            </div>

            <Skeleton className="flex-1 h-dvh" />
        </main>
    );
}
