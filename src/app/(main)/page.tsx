'use client'

import { Coin, Energy, Money } from "@/components/Icon";
import { Header } from "@/components/shared/Header";
import { Navbar } from "@/components/shared/Navbar";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
    const router = useRouter()
    useEffect(() => {
        if (localStorage.getItem('onboarding') === undefined) {
            router.replace('onboarding')
        }
    }, [])

    return <div className="flex flex-col h-screen items-stretch" style={{ background: 'url(/images/bg-2.jpg) no-repeat top center', backgroundSize: '100%' }}>
        <Header />
        <div className={"flex justify-center"}>
            <div className="mx-auto flex items-center gap-3 mb-4">
                <div className="relative w-9">
                    <Coin />
                </div>
                <span className="text-4xl">507 981</span>
            </div>
        </div>
        <div
            className="flex-1 relative shadow-[0_0_0_4px_#8C60E3] pt-1  px-4 rounded-t-[40px] pb-[80px] "
            style={{ background: 'url(/images/bg.jpg) no-repeat top center', backgroundSize: '100%' }}
        >
            <Image
                fill
                alt=""
                src="/images/character.jpg"
                className="rounded-t-[40px]"
                objectFit="cover"
            />
            <div className="absolute bottom-[96px] left-4 right-4 flex justify-between z-10">
                <div className="flex gap-2 items-center">
                    <div className="w-[28px] aspect-square relative">
                        <Energy />
                    </div>
                    <span className="text-md">4471 / 5000</span>
                </div>
                <Link className="flex gap-2 items-center" href="/boost">
                    <div className="w-[35px] aspect-square relative">
                        <Money />
                    </div>
                    <span className="text-md">Ускорение</span>
                </Link>
            </div>
            <Navbar />
        </div>
    </div>
}