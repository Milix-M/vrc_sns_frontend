import { Avatar, Button, Link } from '@nextui-org/react'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegComment, FaRegStar } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa6'
import { IoBookmarkOutline } from 'react-icons/io5'
import postAreaCSS from "./PostArea.module.scss"
import userGetMe from '@/hooks/UserMe'

interface PostProps {
  content: string
}

const PostDisplay: React.FC<PostProps> = ({ content }) => {
  const { userData } = userGetMe()

  return (
    <div className={`${postAreaCSS.PostDisplay} bg-overlay p-4 border-b dark:border-slate-600/80`}>
      <div className='flex flex-row'>
        <div className='post-avator pr-3'>
          <a href='#'>
            <Avatar showFallback className='w-12 h-12' src={userData?.icon} />
          </a>
        </div>
        <div className='w-full'>
          <div className='post-header-name flex flex-wrap items-center'>
            <Link href='#'>
              <h3 className='font-bold pr-2 text-black dark:text-white hover:underline'>{userData?.username}</h3>
            </Link>
            <span className='text-sm text-slate-500 dark:text-slate-400'>@{userData?.userid}</span>
            <time
              title='2024/1/30 10:10:10'
              className='text-sm ml-auto text-slate-500 dark:text-slate-400'
            >
              数日前
            </time>
          </div>
          <div className='mb-2 text-foreground'>
            テストの投稿データです。 {content}
          </div>
          <div className='flex flex-row justify-between'>
            <Button isIconOnly variant='light'>
                <FaRegComment size={"1rem"}/>
            </Button>
            <Button isIconOnly variant='light'>
                <FaRetweet size={"1rem"}/>
            </Button>
            <Button isIconOnly variant='light'>
                <FaRegStar size={"1rem"}/>
            </Button>
            <div className=''>
                <Button isIconOnly variant='light'>
                    <IoBookmarkOutline  size={"1rem"}/>
                </Button>
                <Button isIconOnly variant='light'>
                    <BsThreeDots  size={"1rem"}/>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDisplay
