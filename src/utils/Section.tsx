import React, { CSSProperties } from 'react'

interface Props {
    children: React.ReactNode;
    classname?: string;
    style?: CSSProperties;
}

export function Section({ children, classname, style }: Props) {
    return (
        <section className={classname} style={style}>
            {children}
        </section>
    )
}
export function Wrapper({ children, classname, style }: Props) {
    return (
        <div className={`${classname} w-full max-w-7xl relative mx-auto px-6`} style={style}>
            {children}
        </div>
    )
}
export function Heading({ children, classname, style }: Props) {
    return (
        <h2 className={`${classname} lg:text-4xl md:text-[28px] text-2xl leading-[1] font-bold text-secondry lg:text-right text-center`} style={style}>
            {children}
        </h2>
    )
}
export function Subheading({ children, classname, style }: Props) {
    return (
        <p className={`${classname} lg:text-base text-sm text-zinc-600 mt-1 text-center font-medium`} style={style}>
            {children}
        </p>
    )
}
export function ButtonPrimary({ children, classname, style, ...rest }: Props) {
    return (
        <button className={`${classname} text-white bg-primary md:text-base text-sm font-semibold lg:px-6 lg:py-3 px-4 py-2 border-none outline-none cursor-pointer transition-all duration-200 ease-linear hover:bg-primary-dark`} {...rest} style={style}>
            {children}
        </button>
    )
}
export function ButtonSecondry({ children, classname, style, ...rest }: Props) {
    return (
        <button className={`${classname} text-white bg-secondry md:text-base text-sm font-semibold lg:px-6 lg:py-3 px-4 py-2 border-none outline-none cursor-pointer transition-all duration-200 ease-linear hover:bg-secondry-dark`} {...rest} style={style}>
            {children}
        </button>
    )
}