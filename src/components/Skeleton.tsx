import { Section, Wrapper } from "@/utils/Section"

export function CategorySkeleton() {
    return (
        <div className="w-full h-full border border-gray-200 animate-pulse">
            <div className="relative w-full">
                <div className="w-full h-[250px] bg-gray-200"></div>
            </div>

            <div className="relative lg:p-5 p-3">
                <div className="h-6 w-3/4 bg-gray-200"></div>
                <div className="mt-3 space-y-2">
                    <div className="h-4 w-full bg-gray-200 "></div>
                    <div className="h-4 w-5/6 bg-gray-200 "></div>
                    <div className="h-4 w-2/3 bg-gray-200 "></div>
                    <div className="h-4 w-2/6 bg-gray-200 "></div>
                </div>

                <div className='mt-5 w-full flex flex-col gap-2'>
                    <div className="h-3 w-5/6 bg-gray-200"></div>
                    <div className="h-3 w-5/6 bg-gray-200"></div>
                    <div className="h-3 w-5/6 bg-gray-200"></div>
                </div>
            </div>
        </div>

    )
}

export function HomeProductSkeleton() {
    return (
        <div className="relative w-full h-full p-2.5 border border-gray-200 md:rounded-2xl rounded-lg animate-pulse">
            <div className="w-full relative">
                <div className="w-full h-[270px] bg-gray-200 rounded-xl"></div>
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-gray-300"></div>
            </div>

            <div className="mt-2 h-6 w-3/4 bg-gray-200 rounded-md"></div>

            <div className="mt-2 space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>

            <div className="mt-6 h-10 w-36 bg-gray-200 rounded-full"></div>
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

export function SingleProductSkeleton() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex md:flex-row flex-col md:gap-20 gap-7'>
                    <div className='md:w-[450px] w-full'>
                        <div className="sticky top-10 space-y-4 animate-pulse">
                            <div className="w-full h-64 md:h-80 bg-gray-200 rounded-lg"></div>
                        </div>
                    </div>

                    <div className='flex-1 relative space-y-4'>
                        <div className="h-10 md:h-12 w-3/4 bg-gray-200 rounded-md"></div>

                        <div className="space-y-2">
                            <div className="h-4 w-full bg-gray-200 rounded"></div>
                            <div className="h-4 w-full bg-gray-200 rounded"></div>
                            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                        </div>

                        <div className="h-10 w-40 bg-gray-300 rounded-md mt-4"></div>

                        <div className="w-full mt-5 space-y-3">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <div key={idx} className="bg-gray-100 rounded-md p-4 animate-pulse">
                                    <div className="h-6 w-1/2 bg-gray-300 rounded mb-3"></div>
                                    <div className="space-y-1">
                                        {Array.from({ length: 3 }).map((_, jdx) => (
                                            <div key={jdx} className="h-4 w-full bg-gray-200 rounded"></div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Wrapper>
        </Section>
    )
}

export function BlogSkeleton() {
    return (
        <>
            <div className="h-8 bg-gray-200 rounded w-3/4 mt-3" />

            <div className="mt-3 w-full flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-200 rounded-full" />
                    <div className="h-3 w-16 bg-gray-200 rounded" />
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-200 rounded-full" />
                    <div className="h-3 w-20 bg-gray-200 rounded" />
                </div>
            </div>

            <div className="mt-5 space-y-2">
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-11/12" />
                <div className="h-3 bg-gray-200 rounded w-10/12" />
            </div>


            <div className="w-full h-[400px] bg-gray-200 rounded mt-5" />


            <div className="mt-8 flex flex-col gap-8">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex flex-col gap-3">
                        {/* Section Heading */}
                        <div className="h-5 bg-gray-200 rounded w-2/3" />

                        {/* Paragraph */}
                        <div className="space-y-2">
                            <div className="h-3 bg-gray-200 rounded w-full" />
                            <div className="h-3 bg-gray-200 rounded w-11/12" />
                            <div className="h-3 bg-gray-200 rounded w-10/12" />
                        </div>

                        {/* Optional List */}
                        <div className="mt-3 space-y-2 pl-6">
                            {[1, 2, 3].map((li) => (
                                <div key={li} className="h-3 bg-gray-200 rounded w-5/6" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}