import { useEffect, useState } from 'react'
import { blue_bttn, clickHandler } from './sideMenu'

const teal_bttn = 'bg-teal text-black font-bold py-2 px-4 w-40 rounded-lg'

export default function Display() {
  const [logged, loggedSet] = useState(false)
  useEffect(() => {
    if (localStorage.getItem('Id') !== null) loggedSet(true)
  }, [])
  return (
    <>
      <div className="flex flex-col items-center justify-center py-10 text-center  text-5xl font-bold">
        Account Information
      </div>

      {/* Display when no user is logged in */}
      {!logged && (
        <>
          <div className="flex flex-col items-center">
            <div className=" py-8 text-4xl font-bold">
              User is not logged in
            </div>

            <div className="py-6" />

            <button
              className={blue_bttn}
              onClick={() => {
                clickHandler('/login')
              }}
            >
              Login
            </button>

            <div className="py-6" />

            <button
              className={blue_bttn}
              onClick={() => {
                clickHandler('/')
              }}
            >
              Go Home
            </button>
          </div>
        </>
      )}

      {/* Display when user is logged in */}
      {logged && (
        <>
          <div className="flex flex-col items-center pt-6">
            <div className="grid grid-rows-3 divide-y-4 w-10/12 divide-orange items-center text-center">
              
              <div className='flex flex-row justify-between px-4 py-3 text-xl'>
                  <div>Full Name: </div>
                  <div>{`${JSON.parse(localStorage.getItem("user")|| "{}").fname} ${JSON.parse(localStorage.getItem("user")|| "{}").lname}`}</div>
              </div>

              <div className='flex flex-row justify-between px-4 py-3 text-xl'>
                  <div>Email: </div>
                  <div>{`${JSON.parse(localStorage.getItem("user")|| "{}").email}`}</div>
              </div>

              <div className='flex flex-row justify-between px-4 py-3 text-xl'>
                  <div>Account Number: </div>
                  <div>{`${JSON.parse(localStorage.getItem("user")|| "{}").id}`}</div>
              </div>

              <div className='flex flex-row justify-between px-4 py-3 text-xl'>
                  <div>Password: </div>
                  <div>{`${JSON.parse(localStorage.getItem("user")|| "{}").password}`}</div>
              </div>

              <div className='flex flex-row justify-between px-4 py-3 text-xl'>
                  <div>Telephone: </div>
                  <div>{`${JSON.parse(localStorage.getItem("user")|| "{}").phone}`}</div>
              </div>

              <div className='flex flex-row justify-between px-4 py-3 text-xl'>
                  <div>Medical Plan: </div>
                  <div>{`${JSON.parse(localStorage.getItem("user")|| "{}").plan}`}</div>
              </div>
            </div>

            <div className='m-5'/>

            <button
              className={blue_bttn}
              onClick={() => {
                clickHandler('/')
              }}
            >
              Go Home
            </button>
          </div>
        </>
      )}
    </>
  )
}
