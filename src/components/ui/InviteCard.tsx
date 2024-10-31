import { FC } from 'react'
import Image from 'next/image'
import { ArrowRight, Coin } from '../Icon';

interface IProps {
    image: string;
    title: string;
    income: string;
}

export const InviteCard: FC<IProps> = ({ image, title, income }) => {
    return <div className="rounded-xl bg-[#2A163B] p-3.5 flex items-center">
        <div className="flex gap-3 items-center flex-1">
            <div className="w-[58px]">
                <div className="relative">
                    <Image
                        width={58}
                        height={58}
                        layout='responsive'
                        alt=""
                        src={image}
                        className="rounded-lg"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-between gap-1">
                <div className="text-md font-normal">{title}</div>
                <div>
                    <div className="flex items-center gap-1">
                        <div className="w-[17px]">
                            <Coin />
                        </div>
                        <span className="text-sm">{income}</span>
                    </div>
                </div>
            </div>
        </div>
        <ArrowRight />
    </div>
}