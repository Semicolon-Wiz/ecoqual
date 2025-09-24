'use client'
import React, { ChangeEvent } from 'react'

interface InputProps {
    type?: string
    value: string
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    label: string
    name: string
    id?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean
    className?: string
    readOnly?: boolean;
    row?: number;
}

export function TextFields({
    type = 'text',
    value,
    onChange,
    label,
    name,
    id,
    placeholder,
    required = false,
    disabled = false,
    readOnly = false,
    className = '',
}: InputProps) {
    const inputId = id || name

    return (
        <>
            <input
                id={inputId}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                readOnly={readOnly}
                className={`relative w-full bg-transparent border-none outline-none h-full text-lg text-gray-700 font-medium font-montserrat ${className}`}
            />
            <label htmlFor={inputId} className="labels">
                {label}
            </label>
        </>
    )
}

export function TextArea({
    value,
    onChange,
    label,
    name,
    id,
    placeholder,
    required = false,
    disabled = false,
    row = 4,
    className = '',
}: InputProps) {
    const inputId = id || name
    return (
        <>
            <textarea
                id={inputId}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                rows={row}
                className={`relative w-full bg-transparent border-none outline-none h-full text-lg text-gray-700 font-medium font-montserrat ${className}`}
            />
            <label htmlFor={inputId} className="label">
                {label}
            </label>
        </>
    )
}