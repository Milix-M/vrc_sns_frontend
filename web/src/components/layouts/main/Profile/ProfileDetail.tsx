import { Avatar, Button, Image, Link, useDisclosure } from "@nextui-org/react"
import { usePathname } from "next/navigation"
import { FaRegCalendar } from "react-icons/fa"
import { FiChevronLeft } from "react-icons/fi"
import { LiaBirthdayCakeSolid } from "react-icons/lia"
import { UserDataType } from 'lib/types'
import { isValidDate, dateSerializer } from "@/utils/DateSerializer"
import ProfileUpdate from "./ProfileUpdate"

interface ProfileProps {
    userData?: UserDataType
    isUserMe: boolean
}

const ProfileDetail: React.FC<ProfileProps> = ({ userData, isUserMe }) => {
    const router = usePathname()
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    let activateClass = ''
    let url = ''
    if (router === url) {
        activateClass = 'text-primary'
    }
    if (userData === undefined) {
        return <p>now loading...</p>
    }
    return (
        <div className="border-b dark:border-slate-700/70">
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
                src={ userData?.header }
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
                    { !isUserMe && (<Button>
                        フォローする
                    </Button> )}

                    { isUserMe && (<Button onPress={onOpen}>
                        プロフィールを編集
                    </Button> )}
                </div>
                <ProfileUpdate isOpen={isOpen} onOpenChange={onOpenChange} userData={userData}/>
                <div className="mb-1">
                    <h3 className="font-bold text-xl">{ userData?.username}</h3>
                    <span className='text-sm text-slate-500 dark:text-slate-400'>@{userData?.display_id}</span>
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
                    <span className="break-words whitespace-pre-wrap">{userData?.profile}</span>
                </div>
                <div className="flex space-x-3">
                    { isValidDate(userData?.date_of_birth) && (
                        <dl className="flex text-slate-600 dark:text-slate-400">
                            <LiaBirthdayCakeSolid size={'1.4rem'} className="mr-1"/>
                            <dt className="mr-3">誕生日</dt>
                            <dd>{dateSerializer(userData?.date_of_birth, 'dateonly')}</dd>
                        </dl>
                    )}
                    <dl className="flex text-slate-600 dark:text-slate-400">
                        <FaRegCalendar size={'1.4rem'} className="mr-1"/>
                        <dt className="mr-3">登録日</dt>
                        <dd>{dateSerializer(userData?.created_at, 'dateonly')}</dd>
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