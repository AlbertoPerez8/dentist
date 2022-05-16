import Image from 'next/image'

import { clickHandler } from './sideMenu'

const white_bttn = 'bg-white text-black text-lg font-bold py-2 px-4 rounded-full border-black border w-64 h-12'
const teal_bttn = 'bg-teal text-black font-bold py-2 px-4 rounded-full'
const blue_bttn = 'bg-blue text-white font-bold py-2 px-4  rounded-full'

export function HamburgerBttn() {
  return (
    <button
        className="m-5 flex flex-row"
        onClick={() => {
          clickHandler('/sideMenu')
        }}
      >
        <div className="flex h-14 w-14 flex-col rounded-2xl bg-teal">
      <Image
        className={'items-center justify-center'}
        src={'/test.svg'}
        alt={'lol'}
        width={64}
        height={64}
      />
    </div>
      </button>
  )
}

export default function Home() {
  return (
    <>
      <HamburgerBttn/>

      <div className="flex flex-col items-center justify-center">
        <Image
          className="items-center rounded-2xl"
          src={'/logo.png'}
          alt={'hello'}
          width={240}
          height={240}
        />
      </div>

      <div className="flex flex-col items-center justify-center p-8 text-center text-3xl font-bold">
        Dr Blank's Dental Office
      </div>

      <div className="container flex flex-col items-center ">
        <button className={white_bttn}>Book an appointment</button>
        <div className="p-6"></div>
        <button className={white_bttn} onClick={() => {
          clickHandler('/login')
        }}>Sign In</button>
        <div className="p-6"></div>
        <button className={white_bttn} onClick= {() => {
          clickHandler('register')
        }}
        >Register</button>
      </div>
    </>
  )
}
