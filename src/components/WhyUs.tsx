import { ButtonPrimary, ButtonSecondry, Heading, Section, Subheading, Wrapper } from '@/utils/Section'

export default function WhyUs() {
    return (
        <Section>
            <Wrapper>
                <div className='relative w-full flex flex-col lg:gap-14 md:gap-10 gap-8'>
                    <div className='flex-1 text-center'>
                        <Heading>
                            Why Choose <span className='font-inter text-secondry'>EQ Solutions?</span>
                        </Heading>
                        <Subheading classname='max-w-md mx-auto'>
                            Trusted by healthcare professionals worldwide for safety, quality, and innovation.
                        </Subheading>
                    </div>

                    <div className='relative flex-1 grid md:grid-cols-[450px_1fr] grid-cols-1 gap-5'>
                        <div></div>
                        <div className='w-full h-full relative pl-5'>
                            <p className='font-medium md:text-base text-sm text-zinc-700'>
                                EQ Wet Wash Gloves are a modern hygiene solution designed to provide safe, convenient, and effective personal care across multiple settings. From hospitals and senior care facilities to home care, childcare, and even travel, these gloves deliver unmatched comfort and hygiene without the need for traditional water-based washing. The protective inner film ensures safety, while the pre-moisturized, no-rinse fabric makes cleansing quick, gentle, and efficient. By reducing cross-contamination risks and eliminating the need for water or energy, EQ Wet Wash Gloves save valuable resources while promoting eco-friendly practices. Caregivers benefit from time savings and reduced effort, making personal care tasks 10x more efficient, while patients and individuals experience dignity, comfort, and cleanliness. Manufactured under strict quality standards, ECOQUAL Wet Wash Gloves combine affordability with superior performance, making them the most economical and reliable choice for modern hygiene care.
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
