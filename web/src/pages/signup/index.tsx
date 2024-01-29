import axios from 'lib/axios'
import getLayout from '@/components/layouts/non_header'
import { NextRouter, useRouter } from 'next/router'
import { useState } from 'react'
import { Button, Card, CardBody, Input } from '@nextui-org/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type FormDataInfo = {
  name: string
  userid: string
  // submit: any
}

const updateUserInfo = async (
  router: NextRouter,
  username: string,
  userid: string
) => {
  axios.patch('/api/users/me', {
    username,
    userid
  }).then(response =>{
    router.push('/home')
  }).catch(error => {
    //todo エラーが出た時の処理を書く
  })

}

const scheme: yup.ObjectSchema<FormDataInfo> = yup.object().shape({
  name: yup
    .string()
    .required('名前を入力してください')
    .max(50, '50字以下にしてください'),
  userid: yup
    .string()
    .required('ユーザーIDを入力してください')
    .max(15, '15字以下にしてください')
    .matches(/^[a-zA-Z0-9_]+$/, '英数字とアンダースコアのみが使用可能です。')
})

const Signup = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm<FormDataInfo>({
    mode: 'onSubmit',
    resolver: yupResolver(scheme)
  })
  const onSubmit: SubmitHandler<FormDataInfo> = data => console.log(data)

  return (
    <div className='m-4'>
      <Card className='max-w-[420px] w-full mx-auto mt-4 p-2'>
        <CardBody>
          <form
            onSubmit={handleSubmit(async data => {
              await updateUserInfo(router, data.name, data.userid)
            })}
          >
            <div className='signup'>
              <div className='flex flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
                <h1 className='text-center text-xl'>プロフィールを登録🎉</h1>
                <div className='flex flex-col w-full'>
                  <Input
                    type='text'
                    label='名前'
                    errorMessage={
                      errors.name?.message && (
                        <p className='text-xs text-red-500'>
                          {errors.name?.message}
                        </p>
                      )
                    }
                    {...register('name')}
                  />
                </div>
                <div className='flex flex-col w-full'>
                  <Input
                    classNames={{
                      description: ['text-gray-300/90']
                    }}
                    type='text'
                    label='ユーザーID'
                    description='英数字、アンダースコア(_)15桁以内で入力'
                    errorMessage={
                      errors.userid?.message && (
                        <p className='text-xs text-red-500'>
                          {errors.userid?.message}
                        </p>
                      )
                    }
                    {...register('userid')}
                  />
                </div>
              </div>
              <div className='flex flex-wrap justify-end'>
                <Button className='bg-[#2b94ff]' type='submit'>
                  登録
                </Button>
              </div>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}

Signup.getLayout = getLayout

export default Signup
