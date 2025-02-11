"use client"
import Link from "next/link";
//  使用后可以返回当前path
import { usePathname } from "next/navigation";
import { useState } from "react";


const linkData = [
    { name: "About", path: "/dashboard/about" },
    { name: "Settings", path: "/dashboard/settings" }
]
export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    // useState返回一个数组，数组的第一个元素是当前状态的值，而第二个元素是用于更新状态的函数。使用数组解构赋值方式，将这两个值分别赋给count和setCount。
    const [count, setCount] = useState(10)
    const pathname = usePathname()
    console.log(pathname);

    return (
        <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
            <div className=" flex gap-4 font-bold text-lg mb-4 ">
                {
                    linkData.map((linkItem) => {
                        return (<Link key={linkItem.path} className={pathname === linkItem.path ? "text-purple-500" : ""} href={linkItem.path}>{linkItem.name}</Link>)
                    })
                }
            </div>
            <h2>Dashboard Layout {count}</h2>
            <button className="bg-black text-white p-2 my-2" onClick={() => { setCount(count + 1) }}>Increment </button>
            {children}
        </div>
    );
}