import { Section, Wrapper } from "@/utils/Section"
import SurgicalProduct from "./SurgicalProduct"

export default async function Surgical({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <Section>
            <Wrapper>
                <SurgicalProduct id={id} />
            </Wrapper>
        </Section>
    )
}   