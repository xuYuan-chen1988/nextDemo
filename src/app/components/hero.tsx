import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IProps {
    imgUrl: StaticImageData;
    altText: string;
    content: string;
}
export default function Hero(props: IProps) {
    return (
        <div className='h-screen relative'>
            <div className='absolute inset-0 -z-10'>
                <Image src={props.imgUrl} alt={props.altText} fill priority style={{ objectFit: 'cover' }} />
                <div className='absolute inset-0 bg-gradient-to-r opacity-50'></div>
            </div>
            <div className='flex justify-center pt-48 z-10'>
                <h1 className='text-white text-6xl'>{props.content}</h1>
            </div>
        </div>
    )
}
