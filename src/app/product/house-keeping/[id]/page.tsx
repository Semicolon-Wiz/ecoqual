import { Section, Wrapper } from "@/utils/Section"
import HouseKeepingProduct from "./Product"

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <Section>
      <Wrapper>
        <HouseKeepingProduct id={id} />
      </Wrapper>
    </Section>
  )
}   