import Image from 'next/image'

const white_bttn = 'bg-white text-black font-bold py-2 px-4 rounded-full'
const teal_bttn = 'bg-teal text-black font-bold py-2 px-4 rounded-full'
const blue_bttn = 'bg-blue text-white font-bold py-2 px-4 rounded-full'

const hamburgerBttn = (
  <div className="flex h-16 w-16 flex-col rounded-2xl bg-teal">
    <Image
      className={'items-center justify-center'}
      src={'/test.svg'}
      alt={'lol'}
      width={64}
      height={64}
    />
  </div>
)

export default function Home() {
  return (
    <>
      <div className="m-5 flex flex-row">
        <button className={blue_bttn.concat()}> Hello World</button>
      </div>

      <div className="flex flex-col items-center justify-center p-6 text-2xl font-bold">
        Doctor's Office Name Here
      </div>

      <div>
        <Image
          className="items-center rounded-2xl"
          src={'/logo.png'}
          alt={'hello'}
          width={124}
          height={124}
        />
      </div>
      {hamburgerBttn}
    </>
  )
}
