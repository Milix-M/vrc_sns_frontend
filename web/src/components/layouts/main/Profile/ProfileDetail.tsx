import userGetMe from "@/hooks/UserMe"
import { Button, Image } from "@nextui-org/react"
import { FaRegCalendar } from "react-icons/fa"
import { LiaBirthdayCakeSolid } from "react-icons/lia"

const ProfileDetail: React.FC = () => {
    const { userData } = userGetMe()
    return (
        <div className="">
            <Image
                src={ userData?.headder }
                alt="Headder Image."
                loading="lazy"
                className=""
                radius="none"
            />
            <div className="p-2">
                <div className="flex justify-end mt-2">
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
        </div>
    )
}

export default ProfileDetail