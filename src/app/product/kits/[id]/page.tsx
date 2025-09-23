import KitsProduct from "./KitsProduct"
import RecentProduct from "@/components/RecentProduct"
export default async function Kits({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <main>
            <KitsProduct id={id} />
            <RecentProduct id={id} category={'kits'} name={'Kits'} />
        </main>
    )
}   