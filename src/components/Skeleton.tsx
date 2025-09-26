export function CategorySkeleton() {
    return (
        <div className="w-full h-full border border-primary md:rounded-2xl rounded-lg md:p-5 p-2.5 animate-pulse">
            <div className="relative w-full">
                <div className="w-full h-[200px] bg-primary rounded-lg"></div>
            </div>

            <div className="mt-5 relative">
                <div className="h-6 w-3/4 bg-primary rounded-md"></div>
                <div className="mt-3 space-y-2">
                    <div className="h-4 w-full bg-primary rounded"></div>
                    <div className="h-4 w-5/6 bg-primary rounded"></div>
                    <div className="h-4 w-2/3 bg-primary rounded"></div>
                    <div className="h-4 w-2/6 bg-primary rounded"></div>
                </div>
                <div className="mt-6 h-10 w-40 ml-auto bg-primary rounded-full"></div>
            </div>
        </div>

    )
}

export function HomeProductSkeleton() {
    return (
        <div className="relative w-full h-full p-2.5 border border-primary md:rounded-2xl rounded-lg animate-pulse">
            <div className="w-full relative">
                <div className="w-full h-[270px] bg-primary rounded-xl"></div>
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-gray-300"></div>
            </div>

            <div className="mt-2 h-6 w-3/4 bg-primary rounded-md"></div>

            <div className="mt-2 space-y-2">
                <div className="h-4 w-full bg-primary rounded"></div>
                <div className="h-4 w-5/6 bg-primary rounded"></div>
            </div>

            <div className="mt-6 h-10 w-36 bg-primary rounded-full"></div>
        </div>
    )
}

export function ProductSkeleton() {
    return (
        <div className="relative w-full h-full p-2.5 border border-gray-300 md:rounded-2xl rounded-lg animate-pulse">
            <div className="w-full relative">
                <div className="w-full h-[270px] bg-gray-300 rounded-xl"></div>
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-gray-300"></div>
            </div>

            <div className="mt-2 h-6 w-3/4 bg-gray-300 rounded-md"></div>

            <div className="mt-2 space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
            </div>

            <div className="mt-6 h-10 w-36 bg-gray-300 rounded-full"></div>
        </div>
    )
}

