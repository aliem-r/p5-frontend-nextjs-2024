import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { range } from "@/lib/utils";

export default function Loading() {
    return (
        <div className={"grid grid-cols-2 gap-9"}>
            {range(10).map((i) => (
                <Skeleton key={i} className="">
                    <AspectRatio ratio={16 / 9} />
                </Skeleton>
            ))}
        </div>
    );
}
