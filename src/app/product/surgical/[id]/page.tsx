import SurgicalProduct from "./SurgicalProduct"
import RecentProduct from "@/components/RecentProduct"

export default async function Surgical({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <main className="relative w-full">
                <SurgicalProduct id={id} />
                <RecentProduct id={id} category={'surgical'} name={'Surgical Product'} />
        </main>
    )
}   