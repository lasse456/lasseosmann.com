import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { Toaster } from 'sonner'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Toaster position="bottom-right"/>
      <Component {...pageProps} />
    </Fragment>
  )
}
