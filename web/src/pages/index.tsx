import { Button, Card, CardBody, CardHeader } from '@nextui-org/react'
import getLayout from '@/components/layouts/non_header'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const apiEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}`
  function redirectGoogleLogin () {
    router.push(`${apiEndpoint}/api/google/login`)
  }

  return (
    <div>
      <h1 className='text-center text-5xl font-bold tracking-wider'>Fuzzy</h1>
      <p className='text-center mt-4 tracking-widest'>
        Open source SNS application
      </p>
      <Card className='min-w-[420px] mx-auto mt-4'>
        <CardHeader>
          <h1>ログイン/サインイン</h1>
        </CardHeader>
        <CardBody>
          <Button
            variant='bordered'
            startContent={<FcGoogle />}
            onPress={() => {
              redirectGoogleLogin()
            }}
          >
            Login with Google
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}

Login.getLayout = getLayout

export default Login
