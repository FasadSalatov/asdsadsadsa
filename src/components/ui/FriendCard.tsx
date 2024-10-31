import { FC } from "react";
import { Coin, Profile } from "../Icon";

interface IProps {
    name: string;
    income: string;
    balance: string;
}

export const FriendCard: FC<IProps> = ({ name, income, balance }) => {
    return <div className="rounded-xl p-2.5 flex items-center justify-between border border-white border-opacity-30">
        <div className="flex gap-4 items-center">
            <Profile width={42} />
            <div>
                <div className="font-normal text-base mb-1.5">{name}</div>
                <div className="flex gap-1 items-center">
                    <div className="w-3">
                        <Coin />
                    </div>
                    <div className="text-sm">{balance}</div>
                </div>
            </div>
        </div>
        <div className="flex gap-1 items-center">
            <div className="w-[22px]">
                <Coin />
            </div>
            <div className="text-sm">{balance}</div>
        </div>
    </div>
}