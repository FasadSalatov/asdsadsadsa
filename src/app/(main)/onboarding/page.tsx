'use client'

import { Next } from "@/components/Icon"
import { Button } from "@/components/ui/Button"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {
    const router = useRouter()
    const [step, setStep] = useState(0)

    return <div className="flex flex-col h-screen items-stretch">
        {
            step === 0 &&
            <div className="bg-cover bg-no-repeat bg-center  h-screen py-11 flex flex-col align-stretch justify-between"
                style={{ backgroundImage: 'url(/images/onboarding/1.jpg)' }}>
                <div className="text-[28px] text-center leading-none  px-10">
                    Кликайте на экран, зарабатывайте монеты и увеличивайте свой пассивный доход
                </div>
                <div className="flex justify-end px-4">
                    <Button className="w-[78px]" onClick={() => setStep(step + 1)}><Next /></Button>
                </div>
            </div>
        }
        {
            step === 1 &&
            <div className="bg-cover bg-no-repeat bg-center  h-screen py-11 flex flex-col align-stretch justify-between"
                style={{ backgroundImage: 'url(/images/onboarding/2.jpg)' }}>
                <div className="text-[28px] text-center leading-none  px-10">
                    Прокачивайте персонажа и выполняйте задания
                </div>
                <div className="flex justify-end px-4">
                    <Button className="w-[78px]" onClick={() => setStep(step + 1)}><Next /></Button>
                </div>
            </div>
        }
        {
            step === 2 &&
            <div className="bg-cover bg-no-repeat bg-center h-screen py-11 flex flex-col align-stretch justify-between"
                style={{ backgroundImage: 'url(/images/onboarding/3.jpg)' }}>
                <div className="text-[28px] text-center leading-none px-10">
                    Приглашайте друзей и получайте бонусы
                </div>
                <div className="flex justify-end px-4">
                    <Button className="w-[78px]" onClick={() => setStep(step + 1)}><Next /></Button>
                </div>
            </div>
        }
        {
            step === 3 && <div className="bg-cover bg-no-repeat bg-center h-screen py-11 flex flex-col align-stretch justify-between"
                style={{ backgroundImage: 'url(/images/onboarding/4.jpg)' }}>
                <div className="text-[28px] text-center leading-none">
                    Используйте накопленный доход для получения реальных продуктов
                </div>
                <div className="flex px-4">
                    <Button className="w-full" onClick={() => {
                        localStorage.setItem('onboarding', '1');
                        router.push('/');
                    }}>Играть</Button>
                </div>
            </div>
        }
    </div>
}