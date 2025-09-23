import { Section, Wrapper } from "@/utils/Section"
import InstitutionalProducts from "./InstitutionalProducts"
export default async function Kits({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <Section>
            <Wrapper>
                <InstitutionalProducts id={id} />
            </Wrapper>
        </Section>
    )
}   