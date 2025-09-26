'use client';
import { Send, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { TextArea, TextFields } from './TextFields';
import { Product, ProductData, ProductType } from '@/utils/ProductData';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}
interface Props {
    name: string;
    openForm: boolean;
    closeForm: Dispatch<SetStateAction<boolean>>
}

export default function ProductEnquiry({ name, openForm, closeForm }: Props) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    })
    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prevData => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }
    return (
        <AnimatePresence mode='wait'>
            {
                openForm && (
                    <motion.div className='fixed inset-0 min-h-screen z-50 md:p-10 p-5 bg-zinc-800/40 backdrop-blur-[3px] overflow-y-auto'
                        data-lenis-prevent
                        key="overlay"
                        initial={{ opacity: 0, y: 300 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -300 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className='w-full h-max relative'>
                            <motion.div className='max-w-2xl w-full bg-white p-5 rounded-2xl mx-auto'
                                key="form"
                                initial={{ y: 500, opacity: 0, scale: 0.9 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: -500, opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35, ease: [0.25, 0.8, 0.5, 1] }}
                            >
                                <div className='relative w-full flex items-center justify-between'>
                                    <Image src={'/images/logo/logo.svg'} alt='EcoQual' width={200} height={100} className='w-[100px]' />
                                    <button className='md:w-11 md:h-11 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-colors duration-200 ease-in-out' onClick={() => closeForm(false)}>
                                        <X size={24} />
                                    </button>
                                </div>

                                <form>
                                    <div className='relative mt-16 w-full flex items-center flex-col gap-4'>
                                        <div className='relative w-full border border-primary rounded-lg bg-white px-2 py-3'>
                                            <TextFields
                                                type='text'
                                                name='name'
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder=''
                                                label='Name'
                                            />
                                        </div>
                                        <div className='relative w-full border border-primary rounded-lg bg-white px-2 py-3'>
                                            <TextFields
                                                type='email'
                                                name='email'
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder=''
                                                label='Email'
                                            />
                                        </div>
                                        <div className='relative w-full border border-primary rounded-lg bg-white px-2 py-3'>
                                            <TextFields
                                                type='tel'
                                                name='phone'
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder=''
                                                label='Contact No'
                                            />
                                        </div>
                                        <div className='relative w-full border border-primary rounded-lg bg-white px-2 py-3'>
                                            <TextFields
                                                type='text'
                                                name=''
                                                value={name}
                                                placeholder=''
                                                label='Product Name'
                                                readOnly={true}
                                            />
                                        </div>
                                        <div className='relative w-full border border-primary rounded-lg bg-white px-2 py-3'>
                                            <TextArea
                                                name='message'
                                                value={formData.message}
                                                placeholder=''
                                                label='Details'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <button type="submit" className='w-full flex items-center justify-center font-medium text-lg gap-3 text-white bg-zinc-800 hover:bg-zinc-900 transition-colors duration-200 ease-in-out rounded-lg py-3 px-2 cursor-pointer'>
                                            Send Enquiry
                                            <Send size={18} className='relative ' />
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}
