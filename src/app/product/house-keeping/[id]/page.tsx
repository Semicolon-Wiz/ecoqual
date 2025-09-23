import HouseKeepingProduct from "./Product"
import RecentProduct from "@/components/RecentProduct"

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <main className="relative w-full">
        <HouseKeepingProduct id={id} />
        <RecentProduct id={id} category={'houseKeeping'} name={'House Keeping Product'} />
    </main>
  )
}   