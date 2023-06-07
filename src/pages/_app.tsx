import Layout from '@/Components/Layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Router, useRouter } from 'next/router'
import AuthContextProvider from './Auth/AuthContext'
import ProtectedRoute from './Auth/ProtectedRoute'

const noAuthRequired = ['/login',]

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
  {/*<AuthContextProvider>
    {noAuthRequired.includes(router.pathname) ? (
      <>
      <Layout authorized={false}>
        <Component {...pageProps} />
      </Layout>
      </>
    ) : (
      <ProtectedRoute>
          <Layout authorized={true}>
            <Component {...pageProps} />
          </Layout>
        </ProtectedRoute>
    ) }
    </AuthContextProvider>*/}
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}
