import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea
} from '@nextui-org/react'
import { UserDataType } from 'lib/types'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import updateUserInfo from '@/hooks/UserInfoUpdate'
import * as yup from 'yup'
import { useRouter } from 'next/router'

type FormDataInfo = {
  name: string
  profile?: string
  date_of_birth?: string
}

interface ModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  userData: UserDataType
}

const scheme: yup.ObjectSchema<FormDataInfo> = yup.object().shape({
  name: yup
    .string()
    .required('名前を入力してください')
    .max(50, '50字以下にしてください'),
  profile: yup.string().max(200, '200字以下にしてください').optional(),
  date_of_birth: yup
    .string()
    .optional()
})

const ProfileUpdate: React.FC<ModalProps> = ({
  isOpen,
  onOpenChange,
  userData
}) => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm<FormDataInfo>({
    resolver: yupResolver(scheme)
  })
  // const onSubmit = async (data: FormDataInfo) => {
  //   await updateUserInfo(
  //     router,
  //     data.name,
  //     data.display_id,
  //     data.profile,
  //     data.date_of_birth,
  //     true
  //   )
  // }

  return (
    <Modal
      isOpen={isOpen}
      placement={'center'}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className='flex flex-col gap-1'>
              <h1 className='text-xl font-bold'>プロフィールを編集</h1>
            </ModalHeader>
            <ModalBody>
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
                defaultValue={userData.username}
                {...register('name')}
              />
              <Textarea
                label='自己紹介'
                placeholder='自己紹介を入力...'
                defaultValue={userData.profile as string}
                errorMessage={
                  errors.profile?.message && (
                    <p className='text-xs text-red-500'>
                      {errors.profile?.message}
                    </p>
                  )
                }
                {...register('profile')}
              />
              <Input
                type='date'
                label='誕生日'
                placeholder='2020-02-02'
                errorMessage={
                  errors.date_of_birth?.message && (
                    <p className='text-xs text-red-500'>
                      {errors.date_of_birth?.message}
                    </p>
                  )
                }
                {...register('date_of_birth')}
              />
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='light' onPress={onClose}>
                閉じる
              </Button>
              <Button className='bg-[#2b94ff]' type='submit' onPress={onClose}>
                保存
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ProfileUpdate
