'use client'

import { useEffect, useState } from "react";
import { ArrowRight, Coin, Instagram, Telegram, Youtube } from "@/components/Icon";
import { Navbar } from "@/components/shared/Navbar";
import Image from 'next/image';
import { useLaunchParams, useUtils } from "@telegram-apps/sdk-react";

interface Task {
    id: number;
    description: string;
    isDone: boolean;
}

export default function Page() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const launchParams = useLaunchParams();
    const userId = launchParams?.initData?.user?.id;

    useEffect(() => {
        if (userId) fetchTasks(userId);
    }, [userId]);

    async function fetchTasks(userId: number) {
        try {
            setLoading(true);
            const response = await fetch(`https://spacetest.shop/api/task/${userId}`);
            if (!response.ok) throw new Error("Ошибка загрузки задач");

            const data: Task[] = await response.json();
            setTasks(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const getTaskIcon = (description: string) => {
        if (description.includes("Instagram")) return <Instagram />;
        if (description.includes("Telegram")) return <Telegram />;
        if (description.includes("Youtube")) return <Youtube />;
        return <Coin />; // Иконка по умолчанию
    };

    return (
        <div className="flex flex-col relative pb-[60px] h-screen" style={{ background: 'url(/images/bg.jpg) no-repeat top center', backgroundSize: '100%' }}>
            <div className="overflow-auto px-4 pt-4">
                <div className="text-[28px] text-center mb-4">Задания</div>
                <div className="mb-7">
                    <div className="text-lg mb-4">Ежедневные задания</div>
                    {loading ? (
                        <div>Загрузка...</div>
                    ) : tasks.length > 0 ? (
                        tasks.map(task => (
                            <div key={task.id} className="rounded-xl p-2.5 flex items-center border mb-2 border-white border-opacity-30">
                                <div className="relative w-[54px] aspect-square mr-3">
                                    {getTaskIcon(task.description)}
                                </div>
                                <div className="flex flex-col gap-2 flex-1">
                                    <div className="leading-none font-normal text-md">{task.description}</div>
                                    <div className="flex items-center gap-1">
                                        <div className="relative w-4"><Coin /></div>
                                        <span className="text-sm">+567</span>
                                    </div>
                                </div>
                                <ArrowRight />
                            </div>
                        ))
                    ) : (
                        <div>Нет доступных заданий</div>
                    )}
                </div>
            </div>
            <Navbar />
        </div>
    );
}
