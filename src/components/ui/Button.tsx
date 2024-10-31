import clsx from "clsx";
import { PropsWithChildren } from "react"


interface IProps extends PropsWithChildren {
    className?: string;
    onClick?: () => void;
}

export const Button = ({ children, className, onClick }: IProps) => {
    return <div
        className={clsx(
            'h-[60px] flex items-center justify-center font-bold text-xl rounded-2xl bg-[#8C60E3] w-full',
            className
        )}
        onClick={onClick}
    >
        {children}
    </div>
}