'use client'

import { Battery, Coin, Energy, Finger } from "@/components/Icon";
import { Navbar } from "@/components/shared/Navbar";

export default function Page() {

    return <div className="flex flex-col h-screen items-stretch px-4 pt-4 pb-[80px]" style={{ background: 'url(/images/bg.jpg) no-repeat top center', backgroundSize: '100%' }}>
        <div className={"flex items-center flex-col mb-4"}>
            <div className="mb-4">Ваш баланс</div>
            <div className="mx-auto flex items-center gap-3 mb-4">
                <div className="relative w-9">
                    <Coin />
                </div>
                <span className="text-4xl">507 981</span>
            </div>
        </div>
        <div className="mb-7">
            <div className="text-lg mb-4">
                Бесплатные ежедневные усилители
            </div>
            <div className="rounded-xl p-2.5 flex items-center border border-white border-opacity-30">
                <div className="relative w-[54px] aspect-square mr-3">
                    <Energy />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="leading-none font-normal text-md">Полная энергия</div>
                    <div className="text-sm">Доступно 6/6</div>
                </div>
            </div>
        </div>
        <div className="mb-7">
            <div className="text-lg mb-4">
                Усилители
            </div>
            <div className="rounded-xl p-2.5 flex items-center border border-white border-opacity-30 mb-2">
                <div className="relative w-[54px] aspect-square mr-3">
                    <Finger />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="leading-none font-normal text-md">Мультитап</div>
                    <div className="flex items-center gap-1">
                        <div className="relative w-4">
                            <Coin />
                        </div>
                        <span className="text-sm">15K</span>
                    </div>
                </div>
            </div>
            <div className="rounded-xl p-2.5 flex items-center border border-white border-opacity-30">
                <div className="relative w-[54px] aspect-square mr-3">
                    <Battery />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="leading-none font-normal text-md">Лимит энергии</div>
                    <div className="flex items-center gap-1">
                        <div className="relative w-4">
                            <Coin />
                        </div>
                        <span className="text-sm">25K</span>
                    </div>
                </div>
            </div>
        </div>
        <Navbar />
    </div>
}