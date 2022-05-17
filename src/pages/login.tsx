import { redirect } from 'next/dist/server/api-utils'
import { useState } from 'react'
import { blue_bttn, clickHandler, ReturnButton } from './sideMenu'

export default function Login() {
  const [emails, emailSet] = useState('')
  const [passwords, passwordSet] = useState('')

  function signIn() {
    return (
      <div className="flex flex-col items-center">
        <button
          className={blue_bttn}
          onClick={async () => {
            // alert(`email: ${emails}\npassword: ${passwords}`)
            let user
            let object = {
              method: 'POST',
              body: JSON.stringify({ email: emails, password: passwords }),
            }
            await fetch('/api/_login', object)
              .then((response) => response.json())
              .then((data) => {
                user = data.user
                localStorage.setItem('Id', `${user.id}`)
                console.log(localStorage.getItem('Id'))
              })
            clickHandler('/')
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
