import axios from 'lib/axios'
import getLayout from '@/components/layouts/non_header'
import { NextRouter, useRouter } from 'next/router'
import { useState } from 'react'
import { Button, Card, CardBody, Input } from '@nextui-org/react'

import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  name: string
  userid: string
  submit: any
}


const Signup = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit:SubmitHandler<Inputs> = (data) => console.log(data)

  const name = watch("name")
  const userid = watch("userid")

  return (
    <div className='m-4'>
      <Card className='max-w-[420px] w-full mx-auto mt-4 p-2'>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='signup'>
              <div className='flex flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4'>
                <h1 className='text-center text-xl'>プロフィールを登録🎉</h1>
                <div className='flex flex-col w-full'>
                  <Input
                    type='text'
                    label='名前'
                    {...register("name", {
                      required: "名前を入力してください",
                      maxLength: { value: 50, message: "50字以下にしてください"}
                    })}
                  />
                  {errors.name?.message && (
                    <p className='text-xs ml-1 mt-1 text-red-500'>{errors.name?.message}</p>
                  )}
                </div>
                <div className='flex flex-col w-full'>
                  <Input
                    classNames={{
                      description: ['text-gray-300/90']
                    }}
                    type='text'
                    label='ユーザーID'
                    description='英数字、アンダースコア(_)15桁以内で入力'
                    {...register("userid", {
                      required: "ユーザーIDを入力してください",
                      maxLength: { value: 50, message: "15字以下にしてください"}
                    })}
                  />
                  {errors.userid?.message && (
                    <p className='text-xs ml-1 text-red-500'>{errors.userid?.message}</p>
                  )}
                </div>
              </div>
              <div className='flex flex-wrap justify-end'>
                <Button
                  className='bg-[#2b94ff]'
                  type='submit'
                >
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
