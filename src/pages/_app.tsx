import Layout from '@/Components/Layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Router, useRouter } from 'next/router'

const noAuthRequired = ['/login',]

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
