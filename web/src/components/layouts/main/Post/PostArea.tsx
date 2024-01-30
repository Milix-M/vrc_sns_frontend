import { Button, Textarea, Tooltip } from '@nextui-org/react'
import { CgPoll } from 'react-icons/cg'
import { RiImageAddLine } from 'react-icons/ri'
import { PiEyeSlash } from 'react-icons/pi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { LuSend } from 'react-icons/lu'

const PostArea: React.FC = () => {
  return (
    <div className='w-full max-w-2xl my-auto bg-overlay p-4 rounded-md'>
      <div className='flex flex-col rounded-md p-1 mb-2 text-foreground placeholder:focus'>
        <Textarea placeholder='いまなにしてはるん？' />
        <div className='mt-3 flex flex-1 flex-row flex-wrap'>
          <div className='flex flex-row justify-between mr-2'>
            <Tooltip content="画像を追加">
              <Button isIconOnly variant='light'>
                <RiImageAddLine color='#2b94ff' size={'1.4rem'} />
              </Button>
            </Tooltip>

            <Tooltip content="投票を追加">
              <Button isIconOnly variant='light'>
                <CgPoll color='#2b94ff' size={'1.4rem'} />
              </Button>
            </Tooltip>

            <Tooltip content="CWを設定">
              <Button isIconOnly variant='light'>
                <PiEyeSlash color='#2b94ff' size={'1.4rem'} />
              </Button>
            </Tooltip>

            <Tooltip content="絵文字ピッカー">
              <Button isIconOnly variant='light'>
                <HiOutlineEmojiHappy color='#2b94ff' size={'1.4rem'} />
              </Button>
            </Tooltip>
          </div>
          <Button className='bg-[#2b94ff] ml-auto' type='submit'>
            ポスト
            <LuSend />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PostArea
