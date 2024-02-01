import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { IconContext } from 'react-icons'

type MenuTabProps = {
  name: string
  icon: React.ReactNode
  url: string | undefined
}

const HeaderItem = ({ name, icon, url }: MenuTabProps) => {
  // const fontsize = useMemo(() => ({ size: '1.4rem' }), [])
  const router = usePathname()

  let activateClass = ''
  if (router === url) {
    activateClass = 'text-primary'
  }

  return (
    <Link href={url ?? '#'}>
      <div
        className={`w-full flex justify-start ${activateClass} select-none rounded-lg my-2`}
      >
        <Button variant='light' radius='full' size='lg'>
          {/* <IconContext.Provider value={fontsize}>{icon}</IconContext.Provider> */}
          {icon}
          <div className= 'flex flex-col justify-center font-bold px-4 text-lg'>
            {name}
          </div>
        </Button>
      </div>
    </Link>
  )
}

export default HeaderItem
