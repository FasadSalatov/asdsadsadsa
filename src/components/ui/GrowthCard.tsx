import { FC } from 'react'
import Image from 'next/image'
import { Coin } from '../Icon';

interface IProps {
    image: string;
    title: string;
    income: string;
    price: string;
    level: string;
}

export const GrowthCard: FC<IProps> = ({ image, title, income, price, level }) => {
    return <div className="rounded-xl bg-white bg-opacity-5 w-full">
        <div className="flex gap-3 p-3 pb-2">
            <div className="w-[34%] aspect-square">
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
            <div className="flex flex-col justify-between">
                <div className="text-xs leading-[10px]">{title}</div>
                <div>
                    <div className="text-[8px] mb-0.5 text-opacity-50 text-white leading-none">Пассивный доход в месяц</div>
                    <div className="flex items-center gap-1">
                        <div className="w-3">
                            <Coin />
                        </div>
                        <span className="text-xs">{income}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t border-opacity-10 border-white flex gap-3 pb-2 px-3 items-center">
            <div className="text-xs leading-none pt-1">lvl {level}</div>
            <div className="h-6 border-l border-white border-opacity-20"></div>
            <div className="flex gap-2 pt-1 items-center">
                <div className="w-[17px]">
                    <Coin />
                </div>

                <span className="text-sm leading-none">{price}</span>
            </div>
        </div>
    </div>
}