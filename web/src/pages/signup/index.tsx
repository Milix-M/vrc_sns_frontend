import axios from 'lib/axios'
import getLayout from '@/components/layouts/non_header'
import { NextRouter, useRouter } from 'next/router'
import { useState } from 'react'
import { Button, Card, CardBody, Input } from '@nextui-org/react'

const Signup = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [userid, setUserid] = useState('')

  return (
    <div className='m-4'>
      <Card className='max-w-[420px] w-full mx-auto mt-4 p-2'>
        <CardBody>
          <div className='signup'>
            <div className='flex flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
              <h1 className='text-center text-xl'>プロフィールを登録🎉</h1>
              <Input
                type='text'
                label='名前'
                onChange={e => setUsername(e.currentTarget.value)}
                maxLength={50}
              />
              <Input
                classNames={{
                  description: ['text-gray-300/90']
                }}
                type='text'
                label='ユーザーID'
                maxLength={15}
                onChange={e => setUserid(e.currentTarget.value)}
                description='英数字、アンダースコア(_)15桁以内で入力'
              />
            </div>
            <div className='flex flex-wrap justify-end'>
              <Button
                className='bg-[#2b94ff]'
                // onPress={() => updateUserInfo(router, username, displayName)}
              >
                登録
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

Signup.getLayout = getLayout

export default Signup
