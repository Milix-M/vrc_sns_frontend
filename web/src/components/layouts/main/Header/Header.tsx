import { BsPerson } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

import MenuTab from "./HeaderItem"
import { useTheme } from "next-themes";

const headerItemList = [
    {
        id: 1,
        name: "ホーム",
        icon: <GoHome size={"1.4rem"}/>,
        url: "/home",
    },
    {
        id: 2,
        name: "通知",
        icon: <FaRegBell size={"1.4rem"}/>,
        url: "notifications",
    },
    {
        id: 3,
        name: "メッセージ",
        icon: <MdOutlineEmail size={"1.4rem"}/>,
        url: "messages",
    },
    {
        id: 4,
        name: "ブックマーク",
        icon: <IoBookmarkOutline size={"1.4rem"}/>,
        url: "bookmarks",
    },
    {
        id: 5,
        name: "プロフィール",
        icon: <BsPerson size={"1.4rem"}/>,
        url: "profile",
    },
]

const HeaderItem = () => {
    const headerReactNodeList = headerItemList.map((headerItem) => (
        <MenuTab
            key={headerItem.id}
            name={headerItem.name}
            icon={headerItem.icon}
            url={headerItem.url}
        />
    ));

    return <>{headerReactNodeList}</>;
}

const Header = () => {
    const { theme } = useTheme()

    return (
        <header className="flex justify-start bg-ovelay border-slate-600">
            <div className="">
                <HeaderItem />
            </div>
        </header>
    )
}

export default Header;