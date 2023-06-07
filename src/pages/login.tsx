import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAuth } from '@/pages/Auth/AuthContext'
import {FirebaseFunctions} from '@/firebase/functions'
const Login = () => {
  const router = useRouter()
  const { user, login } = useAuth()
  const [errMsg, setErrMsg] = useState("")
  const [success, setSuccess] = useState<boolean>(false)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async (e: any) => {
    e.preventDefault()

    console.log(user)
    try {
      //await new FirebaseFunctions().Login(data.email,data.password)//login(data.email, data.password)
      setSuccess(true)
      router.push('/')
    } catch (errMsg) {
      setSuccess(false)
      setErrMsg("Autenticazione non avvenuta con successo");
      console.log(setErrMsg)
    }
  }

  const goRouter = () => {
    router.push('/');
  }

  return (
    <div
      style={{
        width: '20%',
        paddingTop: '1%',
        margin: 'auto',
      }}
      className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-md space-y-8">
        <h1 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>Accedi al Pannello</h1>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="email"
              value={data.email}
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
            />
          </div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
            value={data.password}
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
          />
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => goRouter()}
          >
            Accedi
          </button>
          <p aria-live='assertive'>
          {errMsg}
        </p>
        </form>

      </div>
    </div>
  )
}

export default Login;