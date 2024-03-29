import { Button, Textarea, Tooltip } from '@nextui-org/react'
import { CgPoll } from 'react-icons/cg'
import { RiImageAddLine } from 'react-icons/ri'
import { PiEyeSlash } from 'react-icons/pi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { LuSend } from 'react-icons/lu'
import postAreaCSS from './PostArea.module.scss'
import { useState } from 'react'
import axios from 'lib/axios'
import data from '@emoji-mart/data/sets/14/twitter.json'
import Picker from '@emoji-mart/react'
import { useTheme } from 'next-themes'
import i18n from '@emoji-mart/data/i18n/ja.json'
import { EmojiType } from 'lib/types'

const PostArea: React.FC = () => {
  const [content, setContent] = useState<string>('')
  const [isPickerOpened, setIsPickerOpened] = useState<boolean>(false)
  const { theme } = useTheme()

  const handlePost = async () => {
    if (!content.trim()) {
      alert('投稿内容は必須です')
      return
    }

    const requestBody = {
      content
    }

    try {
      await axios.post('/api/post/create', requestBody)

      setContent('')
    } catch (err) {
      console.log('Error posting data:', err)
    }
  }

  return (
    <div className='w-full bg-overlay p-4 rounded-t-md border-b border-slate-600/80'>
      <div className='flex flex-col rounded-md p-1 mb-2 text-foreground placeholder:focus'>
        <Textarea
          placeholder='いまなにしてはるん？'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <div className='mt-3 flex flex-1 flex-row flex-wrap justify-between relative'>
          <div className='flex flex-row mr-2'>
            <Tooltip content='画像を追加'>
              <Button isIconOnly variant='light'>
                <RiImageAddLine color='#2b94ff' size={'1.4rem'} />
              </Button>
            </Tooltip>

            <Tooltip content='投票を追加'>
              <Button isIconOnly variant='light'>
                <CgPoll color='#2b94ff' size={'1.4rem'} />
              </Button>
            </Tooltip>

            <Tooltip content='CWを設定'>
              <Button isIconOnly variant='light'>
                <PiEyeSlash color='#2b94ff' size={'1.4rem'} />
              </Button>
            </Tooltip>

            <Tooltip content='絵文字ピッカー'>
              <Button
                isIconOnly
                variant='light'
                onClick={() => setIsPickerOpened(!isPickerOpened)}
              >
                <HiOutlineEmojiHappy color='#2b94ff' size={'1.4rem'} />
              </Button>
            </Tooltip>
            {isPickerOpened && (
              <div className='absolute z-50 top-[40px] w-full'>
                <Picker
                  theme={theme === 'light' ? 'light' : 'dark'}
                  data={data}
                  onEmojiSelect={(emoji: EmojiType) =>
                    setContent(prevContent => prevContent + emoji.native)
                  }
                  set='twitter'
                  i18n={i18n}
                  dynamicWidth={true}
                  onClickOutside={() => setIsPickerOpened(false)}
                />
              </div>
            )}
          </div>
          <Button className='bg-[#2b94ff]' type='submit' onClick={handlePost}>
            ポスト
            <LuSend />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PostArea
