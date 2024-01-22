import '@/styles/globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const notoSansJapanese = Noto_Sans_JP({
  subsets: ['latin']
})

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem={false}
      >
        <div className={`${notoSansJapanese.className} min-h-screen`}>
          {getLayout(<Component {...pageProps} />)}
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default App
