import { FC } from "react";
import Image from 'next/image';

export const Safe: FC = () => (
    <Image
        fill
        alt=""
        src="/images/safe.png"
        objectFit="contain"
    />
)