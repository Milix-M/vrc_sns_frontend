import { Avatar, Button } from '@nextui-org/react'
import { BsThreeDots } from 'react-icons/bs'
import { FaRegComment, FaRegStar } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa6'
import { IoBookmarkOutline } from 'react-icons/io5'

const PostDisplay: React.FC = () => {
  return (
    <div className='w-full max-w-2xl bg-overlay p-4 rounded-md mt-4'>
      <div className='flex flex-row'>
        <div className='post-avator pr-3'>
          <a href='#'>
            <Avatar showFallback className='w-12 h-12' src='' />
          </a>
        </div>
        <div className='w-full'>
          <div className='post-header-name flex flex-wrap items-center'>
            <h3 className='font-bold pr-2'>ユーザー名</h3>
            <span className='font-thin text-sm'>@test</span>
            <time
              title='2024/1/30 10:10:10'
              className='font-thin text-sm ml-auto'
            >
              数日前
            </time>
          </div>
          <div className='mb-2 text-foreground'>
            テストの投稿データです。 
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
