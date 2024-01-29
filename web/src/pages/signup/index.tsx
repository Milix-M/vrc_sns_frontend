import axios from 'lib/axios'
import getLayout from '@/components/layouts/non_header'
import { NextRouter, useRouter } from 'next/router'
import { useState } from 'react'
import { Button, Card, CardBody, Input } from '@nextui-org/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';


type FormDataInfo = {
  name: string
  userid: string
  // submit: any
}

const scheme: yup.ObjectSchema<FormDataInfo> = yup.object({
  name: yup.string().required('名前を入力してください').max(50, "50字以下にしてください"),
  userid: yup.string().required('ユーザーIDを入力してください').max(15, "15字以下にしてください")
})

const Signup = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormDataInfo>()
  const onSubmit:SubmitHandler<FormDataInfo> = (data) => console.log(data)


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
                    errorMessage={errors.name?.message && (
                      <p className='text-xs text-red-500'>{errors.name?.message}</p>
                    )}
                    {...register("name", {
                      required: "名前を入力してください",
                      maxLength: { value: 50, message: "50字以下にしてください"}
                    })}
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
                    errorMessage={errors.userid?.message && (
                      <p className='text-xs text-red-500'>{errors.userid?.message}</p>
                    )}
                    {...register("userid", {
                      required: "ユーザーIDを入力してください",
                      maxLength: { value: 50, message: "15字以下にしてください"}
                    })}
                  />
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
