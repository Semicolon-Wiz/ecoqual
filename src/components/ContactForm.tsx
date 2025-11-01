'use client';
import { Heading, Section, Subheading, Wrapper } from '@/utils/Section';
import Image from 'next/image'
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Loader2, Send } from 'lucide-react';

interface ContactInfo {
    title: string;
    icon: string;
    content: string
    link: string;
}
interface FormData {
    name: string,
    email: string;
    phone: string;
    message: string
}


export default function ContactForm() {
    const contactInfo: ContactInfo[] = [
        {
            title: 'Address',
            content: '38/7 -B-30, Raghunath Nagar, Tulsipur, Mahmoorganj, Varanasi, Uttar Pradesh 221010',
            icon: '/images/svg/icons/pin.svg',
            link: 'https://maps.app.goo.gl/ExARevfgX9WwD3hN9'
        },
        {
            title: 'Phone',
            content: '+91 7307430163',
            icon: '/images/svg/icons/phone.svg',
            link: 'tel:+917307430163'
        },
        {
            title: 'E-Mail',
            content: 'contact@ecoqual.in',
            icon: '/images/svg/icons/mail.svg',
            link: 'mailto:contact@ecoqual.in'
        },
    ]
    const [loading, setLoading] = useState<boolean>(false);
    const [contactFormData, setContactFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        e.preventDefault();
        const { name, value } = e.target
        setContactFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('name', contactFormData.name)
        formData.append('email', contactFormData.email)
        formData.append('phone', contactFormData.phone)
        formData.append('message', contactFormData.message)

        try {
            await toast.promise(
                axios
                    .post("/api/v1/contact", formData)
                    .then((response) => {
                        if (response.status === 200) {
                            setContactFormData({
                                name: "",
                                email: "",
                                phone: "",
                                message: "",
                            });
                            setLoading(false)
                            return response.data.message || "Message sent successfully!";
                        } else {
                            return response.data.message || "Something went wrong!";
                        }
                    })
                    .catch((error) => {
                        console.error("Error sending message:", error.message);
                        throw new Error("Failed to send message");
                    }),
                {
                    loading: "Sending message...",
                    success: (message) => message,
                    error: (err) => err.message || "Something went wrong",
                }
            );
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <Section classname=''>
            <Wrapper>
                <div className='relative w-full flex flex-col gap-8'>
                    <div className='flex-1 text-center'>
                        <span className='lg:text-xl md:text-base text-sm font-medium text-secondry' >CONTACT US</span>
                        <Heading>
                            We&apos;re Here to Support You
                        </Heading>
                        <Subheading classname='max-w-md mx-auto'>
                            Reach out to our experts for product inquiries, partnerships, or bulk orders.
                        </Subheading>
                    </div>

                    <div className='relative w-full grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className="w-full h-full relative md:p-8 p-3 bg-white rounded-2xl border border-neutral-300">
                            <div className='w-full relative'>
                                <h3 className='font-bold text-xl text-[#525252]'>
                                    Contact Information
                                </h3>
                            </div>
                            <div className='w-full mt-5 flex flex-col gap-6'>
                                {
                                    contactInfo.map((info, idx) => (
                                        <div className='relative w-full flex gap-2' key={idx}>
                                            <div className='w-8 h-8 shrink-0'>
                                                <Image src={info.icon} width={32} height={32} alt={info.title} />
                                            </div>
                                            <div className='relative max-w-[320px]'>
                                                <h4 className='text-base text-zinc-900'>
                                                    {info.title}
                                                </h4>
                                                <Link href={info.link} className='relative text-sm font-normal text-[#4E4E4E] leading-[1.1] !font-montserrat'>
                                                    {info.content}
                                                </Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="w-full h-full relative md:p-8 p-3 bg-white rounded-2xl border border-neutral-300">
                            <div className='w-full relative'>
                                <h3 className='font-bold text-xl text-[#525252]'>
                                    Send us a Message
                                </h3>
                            </div>

                            <form className='w-full mt-5 flex flex-col gap-5' onSubmit={handleSubmit}>
                                <div className='w-full grid grid-cols-2 gap-2'>
                                    <input
                                        type="text"
                                        placeholder='Full Name'
                                        name='name'
                                        value={contactFormData.name}
                                        onChange={handleChange}
                                        className='w-full h-full bg-transparent border border-neutral-300 rounded-md px-2 py-2 outline-none text-xl text-[#4E4E4E] font-montserrat'
                                    />
                                    <input type="tel"
                                        placeholder='Phone'
                                        name='phone'
                                        value={contactFormData.phone}
                                        onChange={handleChange}
                                        className='w-full h-full bg-transparent border border-neutral-300 rounded-md px-2 py-2 outline-none text-xl text-[#4E4E4E]  font-montserrat'
                                    />
                                </div>
                                <div className='w-full relative'>
                                    <input
                                        type="email"
                                        placeholder='E-Mail'
                                        name='email'
                                        value={contactFormData.email}
                                        onChange={handleChange}
                                        className='w-full h-full bg-transparent border border-neutral-300 rounded-md px-2 py-2 outline-none text-xl text-[#4E4E4E] font-montserrat'
                                    />
                                </div>
                                <div className='w-full relative'>
                                    <textarea
                                        placeholder='Message'
                                        rows={4}
                                        name='message'
                                        value={contactFormData.message}
                                        onChange={handleChange}
                                        className='w-full h-full bg-transparent border border-neutral-300 rounded-md px-2 py-2 outline-none text-xl text-[#4E4E4E] font-montserrat'
                                    />
                                </div>
                                <div className='w-full relative'>
                                    <button type="submit" className='w-full flex items-center justify-center font-medium text-lg gap-3 text-white bg-zinc-800 hover:bg-zinc-900 transition-colors duration-200 ease-in-out rounded-lg py-3 px-2 cursor-pointer'>
                                        {loading ? (
                                            <>
                                                <Loader2 className="animate-spin" size={18} />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Enquiry
                                                <Send size={18} className='relative' />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Toaster />
            </Wrapper>
        </Section>
    )
}
