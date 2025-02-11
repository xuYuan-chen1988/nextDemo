import React from 'react'
import Hero from '@/app/components/hero'
import HomeSrc from '/public/2.jpeg'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'reliability',
    description: 'reliability',
}
export default function page() {
    return (
        <Hero imgUrl={HomeSrc} altText='紫菱' content='韩立' />
    )
}
