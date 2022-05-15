const white_bttn = "bg-white text-black font-bold py-2 px-4 rounded-full"
const teal_bttn = "bg-teal text-black font-bold py-2 px-4 rounded-full"
const blue_bttn = "bg-blue text-white font-bold py-2 px-4 rounded-full"


export default function Home() {
  return (
    <>
      <div className="items-center p-2">
        <button className={blue_bttn.concat()}> Hello World</button>
      </div>
    </>
  )
}
