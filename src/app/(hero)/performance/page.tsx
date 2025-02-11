import React from 'react'
import Hero from '@/app/components/hero'
import HomeSrc from '/public/11.webp'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'performance',
    description: 'performance',
}
export default function page() {
    return (
        <Hero imgUrl={HomeSrc} altText='紫菱' content='乱星海-紫菱' />
    )
}
