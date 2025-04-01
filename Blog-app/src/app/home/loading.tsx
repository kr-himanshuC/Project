import { Skeleton } from "@/components/ui/skeleton"

function Loading() {
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <Skeleton className="h-5 w-[80%]" />
    </div>
  )
}


export default Loading;
