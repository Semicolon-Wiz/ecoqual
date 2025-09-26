import InstitutionalProducts from "./InstitutionalProducts"
import RecentProduct from "@/components/RecentProduct"
export default async function Kits({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <main className="relative w-full">
            <InstitutionalProducts id={id} />
            <RecentProduct id={id} category={'institutional'} name={'Institutional Uniform Product'} />
        </main>
    )
}   