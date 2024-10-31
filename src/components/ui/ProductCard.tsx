import { FC } from 'react'
import Image from 'next/image';
import clsx from 'clsx';

interface IProps {
    image: string;
    title: string;
    income: string;
    className: string;
}

export const ProductCard: FC<IProps> = ({ image, title, income, className }) => {
    return <div className={clsx('rounded-xl bg-white bg-opacity-5 w-full flex flex-col items-stretch', className)}>
        <div className="p-4">
            <div className="relative aspect-[162/126]">
                <Image
                    fill
                    alt=""
                    src={image}
                    className="rounded-xl"
                    objectFit="cover"
                />
            </div>
        </div>
        <div className="text-xs min-h-10 px-1 text-center">
            {title}
        </div>
        <div className={"flex justify-center items-center p-3 gap-1.5 border-t border-opacity-10 border-white"}>
            <div className="text-[10px] opacity-50 leading-none">Пассивный доход</div>
            <div className="text-xs">{income}</div>
        </div>
    </div>
}