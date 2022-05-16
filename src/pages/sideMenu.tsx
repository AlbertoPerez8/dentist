import Router from 'next/router'

const white_bttn =
  'bg-white text-black text-center  font-bold py-2 px-4 rounded-full border border-black w-64 h-14'

const blue_bttn = 'bg-blue text-white py-2 px-4 w-40 h-12 rounded-xl'

export function HomeButton({ name }: { name: string }) {
  return <button className={blue_bttn}>{name}</button>
}

export const clickHandler = (page: string) => {
  Router.push(page)
}

export function ReturnButton() {
  return (
    <div className="flex flex-col items-center p-24">
      <a href="/">
        <HomeButton name={'Return Home'} />
      </a>
    </div>
  )
}

export default function Menu() {
  return (
    <>
      <div className="container h-screen w-5/6 bg-menu">
        <div className="flex flex-col items-center p-24 ">
          <button
            className={white_bttn}
            onClick={() => {
              clickHandler('/')
            }}
          >
            Account Settings
          </button>

          <div className="p-6" />

          <button
            className={white_bttn}
            onClick={() => {
              clickHandler('/')
            }}
          >
            Logout
          </button>

          <div className="p-6" />

          <button
            className={white_bttn}
            onClick={() => {
              clickHandler('/about')
            }}
          >
            About Us
          </button>
        </div>
      </div>
    </>
  )
}
