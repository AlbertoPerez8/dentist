import { useState } from 'react'
import { ReturnButton } from './sideMenu'

const tealButton =
  'bg-teal text-black font-bold py-2 px-4 w-40 h-12 rounded-xl hover:border-black hover:border'

export default function Register() {
  const [fname, fnameSet] = useState('')
  const [lname, lnameSet] = useState('')
  const [email, emailSet] = useState('')
  const [password, passwordSet] = useState('')
  const [phone, phoneSet] = useState('')
  const [plan, planSet] = useState('')

  function Submit() {
    return (
      <div className="flex flex-col items-center">
        <a href="/" />
          <button
            className={tealButton}
            onClick={() => {
              console.log(`first name: ${fname || 'empty'}\nlast name: ${lname|| 'empty'}\nemail: ${email|| 'empty'}\npassword: ${password|| 'empty'}\nphone: ${phone || 'empty'}\nplan: ${plan|| 'empty'}
              `)
            }}
          >
            Register
          </button>
      </div>
    )
  }

  function form() {
    return (
      <>
        <input
          type="text"
          name="fname"
          className="h-12 w-64 rounded-xl p-2 text-lg text-black"
          placeholder="First Name"
          onChange={(e) => fnameSet(e.target.value)}
        />

        <div className="m-2" />

        <input
          type="text"
          name="lname"
          className="h-12 w-64 rounded-xl p-2 text-lg text-black"
          placeholder="Last Name"
          onChange={(e) => {
            lnameSet(e.target.value)
          }}
        />
        <div className="m-2" />

        <input
          type="text"
          name="email"
          className="h-12 w-64 rounded-xl p-2 text-lg text-black"
          placeholder="Email"
          onChange={(e) => {
            emailSet(e.target.value)
          }}
        />

        <div className="m-2" />

        <input
          type="password"
          name="password"
          className="h-12 w-64 rounded-xl p-2 text-lg text-black"
          placeholder="Password"
          onChange={(e) => {
            passwordSet(e.target.value)
          }}
        />

        <div className="m-2" />

        <input
          type="text"
          name="phone"
          className="h-12 w-64 rounded-xl p-2 text-lg text-black"
          placeholder="Phone number"
          onChange={(e) => {
            phoneSet(e.target.value)
          }}
        />
        <div className="m-2" />

        <select
          className=" h-12 w-64 rounded-xl text-black transition ease-in-out"
          name="plan"
          onChange={(e) => {
            planSet(e.target.value)
          }}
        >
          <option value="">Select you medical plan</option>
          <option value="Medicare">Medicare</option>
          <option value="Triple S">Triple S</option>
          <option value="Reforma">Reforma</option>
        </select>
      </>
    )
  }

  return (
    <>
      <div className="my-16 flex flex-col items-center text-5xl font-bold">
        Register
      </div>
      <div className=" flex flex-col items-center">{form()}</div>
      <div className="flex flex-col">
        <div className="m-10" />
        {Submit()}
        <div className="m-6" />
        <ReturnButton />
      </div>
    </>
  )
}
