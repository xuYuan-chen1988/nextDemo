import React from 'react'
import Hero from '@/app/components/hero'
import HomeSrc from '/public/7.jpeg'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'scale',
    description: 'scale',
}
export default function page() {
    return (
        <Hero imgUrl={HomeSrc} altText='紫菱' content='韩立' />
    )
}
