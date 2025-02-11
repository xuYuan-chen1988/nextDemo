"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const linkData = [
    {
        name: "Performance",
        href: "/performance"
    },
    {
        name: "Reliability",
        href: "/reliability"
    },
    {
        name: "Scale",
        href: "/scale"
    }
]

// const accessLink = ["/",  "/performance",  "/reliability", "/scale"]

/**
 * 导出一个默认的函数组件 Header，用于渲染页面的头部。
 * 该组件通过使用 Next.js 的 Link 组件来创建导航链接，并利用 usePathname 钩子获取当前页面路径。
 * 这使得 Header 组件能够根据当前路径动态地高亮显示导航链接。
 */
export default function Header() {
    // 使用 usePathname 钩子获取当前页面路径名称。
    const pathName = usePathname()
    // if(!accessLink.includes(pathName)) return null;
    // 返回一个包含导航栏的 div 元素。
    // 该导航栏具有全屏宽度，z-index 设置为 10 以确保它在其他内容之上显示。
    return (
        <div className="absolute w-full z-10">
            {/* 创建一个容器，内容居中对齐，并设置左右内边距为自动，以实现左右对齐。 */}
            {/* 容器内内容使用白色显示，上下内边距为 8，以提供足够的空间。 */}
            <div className="flex justify-between container mx-auto text-white p-8">
                {/* 添加一个回家链接，文本为 "Home"，点击后跳转到根路径。 */}
                <Link className="text-3xl font-bold" href="/">Home</Link>
                {/* 创建一个 div 来包含所有的导航链接，链接之间有适当的空间。 */}
                <div className="text-xl space-x-4">
                    {/* 遍历 linkData 数组，为每个项创建一个导航链接。 */}
                    {/* 根据当前路径动态设置链接的样式，如果当前路径与链接路径匹配，则应用特殊样式。 */}
                    {linkData.map((item) => (
                        <Link key={item.href} className={pathName === item.href ? "text-purple-500" : ""} href={item.href}>{item.name}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}



