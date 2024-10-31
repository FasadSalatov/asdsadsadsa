import { FC } from "react";
import Image from 'next/image';

export const Battery: FC = () => (
    <Image
        fill
        alt=""
        src="/images/battery.png"
        objectFit="contain"
    />
)