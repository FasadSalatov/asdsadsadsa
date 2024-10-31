import { ActiveLink } from "@/components/ActiveLink"
import { Blocks, Chart, Coins, Home, People } from "@/components/Icon"

const items = [
    {
        icon: <Home />,
        title: 'Главная',
        path: '/',
    },
    {
        icon: <Chart />,
        title: 'Развитие',
        path: '/growth',
    },
    {
        icon: <People />,
        title: 'Друзья',
        path: '/friends',
    },
    {
        icon: <Coins />,
        title: 'Задания',
        path: '/tasks',
    },
    {
        icon: <Blocks />,
        title: 'Продукты',
        path: '/products',
    },
]

export const Navbar = () => {
    return <div className="absolute bottom-4 right-4 left-4 top-auto">
        <div className="p-1 h-16 bg-[#2B2140] flex rounded-xl">
            {
                items.map(({ icon, title, path }) => (
                    <ActiveLink
                        key={path}
                        className="flex flex-col pb-2 basis-0 flex-1 justify-end items-center rounded-lg opacity-50 gap-1"
                        activeClassName="bg-[#8C60E3] !opacity-100"
                        href={path}
                    >
                        {icon}
                        <span className="text-[9px]">{title}</span>
                    </ActiveLink>
                ))
            }
        </div>
    </div>
}