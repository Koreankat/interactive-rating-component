import "./App.css"
import Star from "./Pics/icon-star.svg"
import React, { useState } from "react"
import Pay from "./Pics/illustration-thank-you.svg"

const numbers = [
  { key: 1, num: 1 },
  { key: 2, num: 2 },
  { key: 3, num: 3 },
  { key: 4, num: 4 },
  { key: 5, num: 5 },
]
function Rating({ changeStyle, listItems }) {
  return (
    <div className='md:w-[25.625rem] w-[20.625rem] card rounded-3xl z-10'>
      <div className='p-8'>
        <img src={Star} alt='Star' className='star mb-6' />
        <h1 className='text-white font-bold text-xl mb-3'>How did we do?</h1>
        <div className='flex flex-col justify-center items-center'>
          <p className='light-white mb-8'>
            {" "}
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>{" "}
          <div className='md:w-[21.25rem] w-[17.5rem]'>
            <ul className='flex justify-between items-center light-white text-center'>
              {listItems}
            </ul>
          </div>
          <button
            className='md:w-[21.25rem] w-[17.5rem] mt-6 text-white p-2 btn rounded-full font-bold'
            onClick={changeStyle}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}
function Feedback({ isClicked }) {
  return (
    <div className='md:w-[25.625rem] w-[20.625rem] card rounded-3xl zm'>
      <div className='p-8 flex flex-col justify-center items-center'>
        <div className='mb-5'>
          <img src={Pay} alt='pay' className='mb-6' />
          <p className='bg-light p-1 w-[11.875rem] text-center rounded-full '>
            You selected out {isClicked} of 5
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-3xl text-white mb-3'>Thank you!</h1>
          <p className='light-white text-center md:w-[21.875rem] text-[0.969rem]'>
            {" "}
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  ) //illustration-thank-you.svg
}

function App() {
  const [isClicked, setIsClicked] = useState(false)

  const listItems = numbers.map((number) => (
    <button
      key={number.key}
      className='numbers'
      id='numbers'
      onClick={() => {
        setIsClicked(number.key)
      }}
    >
      {number.num}
    </button>
  ))
  const [style, setStyle] = useState("shown")
  const changeStyle = () => {
    console.log("you just clicked")

    setStyle("hidden")
  }
  return (
    <>
      <div className={style}>
        <Rating changeStyle={changeStyle} listItems={listItems} />
      </div>
      <div className='v-center flex justify-center items-center zm '>
        <Feedback isClicked={isClicked} />
      </div>
    </>
  )
}

export default App
