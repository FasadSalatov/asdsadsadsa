import Image from 'next/image';
import { ArrowRight, Profile, Safe } from "@/components/Icon";
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { useEffect, useState } from 'react';

// Типы данных для пользователя и задач
interface Task {
    id: number;
    description: string;
    isDone: boolean;
}

interface User {
    balance: number;
    photo_url: string;
    username: string;
    earn_per_hour: number;
    last_claim: string;
}

const API_BASE_URL = 'https://spacetest.shop/api';

// Функция для получения задач пользователя
async function fetchTasks(userId: number): Promise<Task[]> {
    const response = await fetch(`${API_BASE_URL}/task/${userId}`);
    if (!response.ok) {
        throw new Error("Не удалось загрузить задачи");
    }
    return await response.json();
}

// Функция для получения информации о пользователе
async function fetchUser(userId: number): Promise<User> {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) {
        throw new Error("Не удалось загрузить данные пользователя");
    }
    return await response.json();
}

export const Header = () => {
    const lp = useLaunchParams();
    const [user, setUser] = useState<User | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);
    const userId = lp.initData?.user?.id;

    // Загрузка данных пользователя и задач при монтировании компонента
    useEffect(() => {
        if (userId) {
            fetchUser(userId)
                .then(setUser)
                .catch((error) => console.error("Ошибка загрузки пользователя", error));
                
            fetchTasks(userId)
                .then(setTasks)
                .catch((error) => console.error("Ошибка загрузки задач", error));
        }
    }, [userId]);

    return (
        <div className="flex flex-col gap-2.5 justify-center px-4 pb-4 pt-3 relative z-10">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <Profile width={32} />
                    <div className="text-xs text-nowrap">
                        {user?.username || `${lp.initData?.user?.firstName} ${lp.initData?.user?.lastName}`}
                    </div>
                </div>
                <div className="flex gap-1.5">
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-[8px] opacity-50 leading-none mb-1">Пассивный доход в месяц</span>
                        <span className="text-xl leading-none">+{user?.earn_per_hour || '0'}</span>
                    </div>
                    <div className="w-[42px] aspect-square relative">
                        <Safe />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-stretch">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <span className="text-[10px]">Уличный пацан</span>
                        <ArrowRight width={12} />
                    </div>
                    <div className="text-[10px]">
                        {tasks.filter(task => task.isDone).length} <span className="opacity-50">/ {tasks.length}</span>
                    </div>
                </div>
                <div className="relative w-full h-2.5 rounded-md overflow-hidden">
                    <Image
                        fill
                        alt=""
                        src="/images/progress.png"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
}
