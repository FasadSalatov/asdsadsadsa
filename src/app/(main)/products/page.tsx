'use client'

import { Navbar } from "@/components/shared/Navbar"
import { ProductCard } from "@/components/ui/ProductCard"

export default function Page() {

    return <div className="flex flex-col relative pb-[60px] h-screen" style={{ background: 'url(/images/bg.jpg) no-repeat top center', backgroundSize: '100%' }}>
        <div className="overflow-auto px-4 pt-4">
            <div className="text-[28px] text-center mb-4">Продукты</div>

            <div className="grid grid-cols-2 gap-4 gap-y-6 top-0 pb-6 w-full">
                <ProductCard
                    image={'/images/products/1.png'}
                    title="Участие в розыгрыше BMW"
                    income="200K"
                    className="bg-gradient-to-b from-[#8C60E3] to-[rgba(12,43,43,0.3)]"
                />
                <ProductCard
                    image={'/images/products/2.png'}
                    title="Участие в розыгрыше IPhone"
                    income="200K"
                    className="bg-gradient-to-b from-[#F34E4C] to-[rgba(12,43,43,0.3)]"
                />
                <ProductCard
                    image={'/images/products/3.png'}
                    title="Финансовая диагностика"
                    income="200K"
                    className="bg-gradient-to-b from-[#495FFF] to-[rgba(12,43,43,0.3)]"
                />
                <ProductCard
                    image={'/images/products/4.png'}
                    title="Денежный марафон"
                    income="200K"
                    className="bg-gradient-to-b from-[#15CFCF] to-[rgba(12,43,43,0.3)]"
                />
                <ProductCard
                    image={'/images/products/5.png'}
                    title="Вебинар о пассивном доходе"
                    income="200K"
                    className="bg-gradient-to-b from-[#862554] to-[rgba(12,43,43,0.3)]"
                />
                <ProductCard
                    image={'/images/products/6.png'}
                    title="Инвестклуб по подписке"
                    income="200K"
                    className="bg-gradient-to-b from-[rgba(254,136,28,0.72)] to-[rgba(12,43,43,0.3)]"
                />
            </div>
        </div>
        <Navbar />
    </div>
}