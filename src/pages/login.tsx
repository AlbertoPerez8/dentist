import { useState } from 'react'
import { blue_bttn, ReturnButton } from './sideMenu'

import { prisma } from '@/backend/prisma'

export default function Login() {
  const [email, emailSet] = useState('')
  const [password, passwordSet] = useState('')

  function signIn() {
    return (
      <div className="flex flex-col items-center">
        <button
          className={blue_bttn}
          onClick={async () => {
            alert(`email: ${email}\npassword: ${password}`)
          }}
        >
          Sign In
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="my-20 flex flex-col items-center text-5xl font-bold">
        Login
      </div>
      <div className=" flex flex-col items-center">
        <input
          type="text"
          name="email"
          className="h-12 w-64 rounded-xl p-2 text-lg text-black"
          placeholder="Email address"
          onChange={(e) => emailSet(e.target.value)}
        />

        <div className="m-4" />

        <input
          type="password"
          name="password"
          className="h-12 w-64 rounded-xl p-2 text-lg text-black"
          placeholder="Password"
          onChange={(e) => {
            passwordSet(e.target.value)
          }}
        />
      </div>

      <div className="flex flex-col">
        <div className="m-10" />
        {signIn()}
        <div className="m-6" />
        <ReturnButton />
      </div>
    </>
  )
}
