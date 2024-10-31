'use client'

import { useEffect, useState } from "react";
import { Repeat } from "@/components/Icon";
import { Navbar } from "@/components/shared/Navbar";
import { Button } from "@/components/ui/Button";
import { FriendCard } from "@/components/ui/FriendCard";
import { InviteCard } from "@/components/ui/InviteCard";
import { useLaunchParams, useUtils } from "@telegram-apps/sdk-react";

interface Friend {
    balance: number;
    photo_url: string;
    username: string;
}

const items = [
    {
        title: 'Пригласи 3 друзей',
        image: '/images/friends/1.png',
        income: '+175К',
    },
    {
        title: 'Пригласи 7 друзей',
        image: '/images/friends/2.png',
        income: '+175К',
    },
    {
        title: 'Пригласи 10 друзей',
        image: '/images/friends/3.png',
        income: '+175К',
    },
    {
        title: 'Пригласи 25 друзей',
        image: '/images/friends/4.png',
        income: '+175К',
    },
];

export default function Page() {
    const [friends, setFriends] = useState<Friend[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const utils = useUtils();
    const launchParams = useLaunchParams();
    const userId = launchParams?.initData?.user?.id;

    useEffect(() => {
        if (userId) {
            fetchFriends(userId);
        }
    }, [userId]);

    async function fetchFriends(userId: number) {
        try {
            const response = await fetch(`https://spacetest.shop/api/user/referral/${userId}`);
            if (!response.ok) throw new Error("Ошибка загрузки друзей");

            const data: Friend[] = await response.json();
            setFriends(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col relative pb-[140px] h-screen" style={{ background: 'url(/images/bg.jpg) no-repeat top center', backgroundSize: '100%' }}>
            <div className="overflow-auto px-4 pt-4">
                <div className="text-[28px] text-center mb-4">Пригласите друзей!</div>
                <div className="font-normal text-md text-center mb-4">Вы и ваш друг получите бонусы</div>
                <div className="flex flex-col gap-2 mb-8">
                    {items.map((item, index) => (
                        <InviteCard key={index} {...item} />
                    ))}
                </div>
                <div className="flex items-center mb-5 justify-between">
                    <div className="text-lg">Список ваших друзей ({friends.length})</div>
                    <Repeat />
                </div>
                <div className="flex flex-col gap-2 mb-8">
                    {loading ? (
                        <div>Загрузка...</div>
                    ) : (
                        friends.map((friend, index) => (
                            <FriendCard
                                key={index}
                                name={friend.username}
                                income={`+${friend.balance} K`}
                                balance={friend.balance.toLocaleString()}
                            />
                        ))
                    )}
                </div>
            </div>
            <div className="absolute bottom-[96px] right-4 left-4">
                <Button onClick={() => utils.shareURL('https://google.com', 'Invite')}>Пригласить друга</Button>
            </div>
            <Navbar />
        </div>
    );
}
