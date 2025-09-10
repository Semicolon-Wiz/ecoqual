import { Section, Wrapper } from '@/utils/Section'
import ProductPage from './ProductPage'

export default async function Product({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    return (
        <Section>
            <Wrapper classname='!max-w-5xl'>
                <ProductPage id={id} />
            </Wrapper>
        </Section>
    )
}   