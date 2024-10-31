'use client'

import { Coin } from "@/components/Icon";
import { Header } from "@/components/shared/Header";
import { Navbar } from "@/components/shared/Navbar";
import { GrowthCard } from "@/components/ui/GrowthCard";
import { Tabs } from "@/components/ui/Tabs";
import { useState } from "react";

const financesItems = Array(10).fill(null).map((_i, idx) => ({
    image: `/images/growth/${idx + 1}.png`,
    title: "Деньги в долг",
    income: "+1.61K",
    price: "2K",
    level: "1",
}))
const techItems = Array(10).fill(null).map((_i, idx) => ({
    image: `/images/growth/${idx + 1 + 10}.png`,
    title: "Деньги в долг",
    income: "+1.61K",
    price: "2K",
    level: "1",
}))
const businessItems = Array(10).fill(null).map((_i, idx) => ({
    image: `/images/growth/${idx + 1 + 20}.png`,
    title: "Деньги в долг",
    income: "+1.61K",
    price: "2K",
    level: "1",
}))
const realtyItems = Array(10).fill(null).map((_i, idx) => ({
    image: `/images/growth/${idx + 1 + 30}.png`,
    title: "Деньги в долг",
    income: "+1.61K",
    price: "2K",
    level: "1",
}))

export default function Page() {
    const [tab, setTab] = useState('finances')

    return <div className="flex flex-col h-screen items-stretch">
        <Header />
        <div
            className="flex-1 relative shadow-[0_0_0_4px_#8C60E3] pt-1 px-4 rounded-t-[40px] pb-[80px] flex flex-col"
            style={{ background: 'url(/images/bg.jpg) no-repeat top center', backgroundSize: '100%' }}
        >
            <div className="mx-auto flex items-center justify-center gap-3 mb-6 pt-[26px]">
                <div className="relative w-7">
                    <Coin />
                </div>
                <span className="text-[28px] leading-none">507 981</span>
            </div>
            <Tabs
                className="mb-4"
                items={[
                    {
                        label: 'Финансы',
                        value: 'finances',
                    },
                    {
                        label: 'Технологии',
                        value: 'tech',
                    },
                    {
                        label: 'Бизнес',
                        value: 'business',
                    },
                    {
                        label: 'Недвижимость',
                        value: 'realty',
                    },
                ]}
                value={tab}
                onChange={setTab}
            />
            <div className="relative flex-1 overflow-auto w-full">
                <div className="grid grid-cols-2 gap-3 absolute top-0 w-full">
                    {
                        tab === 'finances' && financesItems.map((item, idx) => (
                            <GrowthCard
                                key={idx}
                                {...item}
                            />
                        ))
                    }
                    {
                        tab === 'tech' && techItems.map((item, idx) => (
                            <GrowthCard
                                key={idx}
                                {...item}
                            />
                        ))
                    }
                    {
                        tab === 'business' && businessItems.map((item, idx) => (
                            <GrowthCard
                                key={idx}
                                {...item}
                            />
                        ))
                    }
                    {
                        tab === 'realty' && realtyItems.map((item, idx) => (
                            <GrowthCard
                                key={idx}
                                {...item}
                            />
                        ))
                    }
                </div>
            </div>
            <Navbar />
        </div>
    </div>
}