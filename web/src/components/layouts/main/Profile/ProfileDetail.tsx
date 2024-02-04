import getUserInfo from "@/hooks/GetUserInfo"
import { Avatar, Button, Image, Link } from "@nextui-org/react"
import { usePathname } from "next/navigation"
import { FaRegCalendar } from "react-icons/fa"
import { FiChevronLeft } from "react-icons/fi"
import { LiaBirthdayCakeSolid } from "react-icons/lia"

interface ProfileProps {
    userid: string
}

const ProfileDetail: React.FC<ProfileProps> = ({ userid }) => {
    const { userData } = getUserInfo(userid)
    const router = usePathname()

    let activateClass = ''
    let url = ''
    if (router === url) {
        activateClass = 'text-primary'
    }
    return (
        <div className="border-b dark:border-slate-600/80">
            <div className="p-2 flex">
                <Link href="/home">
                    {/* <div className="items-center flex">
                        <FiChevronLeft className="text-black dark:text-white"/>
                    </div> */}
                    <Button isIconOnly radius="full">
                        <FiChevronLeft className="text-black dark:text-white"/>
                    </Button>
                </Link>
                <div className="flex flex-col ml-4">
                    <h3 className="font-bold">{userData?.username}</h3>
                    <span className="text-sm text-slate-600 dark:text-slate-400">1万 件のポスト</span>
                </div>
            </div>
            <Image
                src={ userData?.headder }
                alt="Headder Image."
                loading="lazy"
                className=""
                radius="none"
            />
            <div className="p-2">
                <div className="flex justify-between mt-2">
                    {/* <div className="mb-10"> */}
                        <Avatar showFallback src={userData?.icon} className="w-20 h-20"/>
                    {/* </div> */}
                    <Button>
                        プロフィールを編集
                    </Button>
                </div>
                <div className="mb-1">
                    <h3 className="font-bold text-xl">{ userData?.username}</h3>
                    <span className='text-sm text-slate-500 dark:text-slate-400'>@{userData?.userid}</span>
                </div>
                <div className="flex mb-3">
                    <div className="mr-3 hover:underline">
                        <span className="font-bold mr-1">111</span>
                        <span className="text-slate-600 dark:text-slate-400">フォロー</span>
                    </div>
                    <div className="hover:underline">
                        <span className="font-bold mr-1">123</span>
                        <span className="text-slate-600 dark:text-slate-400">フォロワー</span>
                    </div>
                </div>
                <div className="mb-3">
                    <span className="break-words">{userData?.profile}</span>
                </div>
                <div className="flex space-x-3">
                    <dl className="flex text-slate-600 dark:text-slate-400">
                        <LiaBirthdayCakeSolid size={'1.4rem'} className="mr-1"/>
                        <dt className="mr-3">誕生日</dt>
                        <dd>12月25日</dd>
                    </dl>
                    <dl className="flex text-slate-600 dark:text-slate-400">
                        <FaRegCalendar size={'1.4rem'} className="mr-1"/>
                        <dt className="mr-3">登録日</dt>
                        <dd>11月11日</dd>
                    </dl>
                </div>
            </div>
            <div className="flex mt-5 justify-around">
                <div className="p-3">
                    <Button variant="light" className={`${activateClass}`}>
                        ポスト
                    </Button>
                </div>
                <div className="p-3">
                    <Button variant="light" className={`${activateClass}`}>
                        メディア
                    </Button>
                </div>
                <div className="p-3">
                    <Button variant="light" className={`${activateClass}`}>
                        お気に入り
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetail