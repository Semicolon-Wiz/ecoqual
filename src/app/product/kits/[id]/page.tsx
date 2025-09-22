import { Section, Wrapper } from "@/utils/Section"
import KitsProduct from "./KitsProduct"
export default async function Kits({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <Section>
            <Wrapper>
                <KitsProduct id={id} />
            </Wrapper>
        </Section>
    )
}   