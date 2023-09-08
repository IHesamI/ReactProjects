"use client";
import Image from 'next/image'
import { CustomButtonProps } from '@/types';
function CustomeButton({ title, containerStyle, handleCLick }: CustomButtonProps) {
    return (
        <button
            type={'button'}
            className={`custom-btn ${containerStyle}`}
            onClick={handleCLick}>
                <span
                className='flex-1'>
                    {title}
                </span>

        </button>
    )
}

export default CustomeButton