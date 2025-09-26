export function CategorySkeleton() {
    return (
        <div className="w-full h-full border border-gray-200 md:rounded-2xl rounded-lg md:p-5 p-2.5 animate-pulse">
            <div className="relative w-full">
                <div className="w-full h-[200px] bg-gray-200 rounded-lg"></div>
            </div>

            <div className="mt-5 relative">
                <div className="h-6 w-3/4 bg-gray-200 rounded-md"></div>
                <div className="mt-3 space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                    <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                    <div className="h-4 w-2/6 bg-gray-200 rounded"></div>
                </div>
                <div className="mt-6 h-10 w-40 ml-auto bg-gray-200 rounded-full"></div>
            </div>
        </div>

    )
}