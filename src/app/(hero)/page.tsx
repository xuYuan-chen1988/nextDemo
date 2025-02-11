import React from 'react'
import Hero from '../components/hero'
import HomeSrc from '/public/10.webp'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '首页',
    description: '首页',
}

export default function page() {
    return (
        <Hero imgUrl={HomeSrc} altText='紫菱' content='妙音门-紫菱' />
    )
}
