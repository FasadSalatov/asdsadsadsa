import { FC } from "react"
import clsx from 'clsx'

interface IProps {
    items: {
        label: string
        value: string
    }[]
    value: string
    onChange: (value: string) => void
    className?: string
}

export const Tabs: FC<IProps> = ({ items, value, onChange, className }) => {
    return <div className={clsx("rounded-xl bg-[#2B2140] flex p-1 h-12", className)}>
        {
            items.map((item) => (
                <button
                    key={item.value}
                    className={clsx(
                        'flex text-sm rounded-lg flex-1 items-center justify-center px-2',
                        value === item.value && 'bg-[#8C60E3]'
                    )}
                    onClick={() => onChange(item.value)}
                >
                    {item.label}
                </button>
            ))
        }
    </div>
}