import { ReturnButton } from './sideMenu'

export default function About() {
  return (
    <>
      <div className="my-20 flex flex-col items-center text-3xl font-bold">
        About us
      </div>
      <div className="m-8 text-lg font-bold text-black ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div>
        <ReturnButton />
      </div>
    </>
  )
}
