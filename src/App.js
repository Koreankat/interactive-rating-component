import "./App.css"
import Star from "./Pics/icon-star.svg"
import React, { useState } from "react"
const numbers = [
  { key: 1, num: 1 },
  { key: 2, num: 2 },
  { key: 3, num: 3 },
  { key: 4, num: 4 },
  { key: 5, num: 5 },
]
function Rating() {
  const [count, setCount] = useState(false)
  const listItems = numbers.map((number) => (
    <span key={number.key} className='numbers'>
      {number.num}
    </span>
  ))
  return (
    <div className='md:w-[410px] w-[330px] card rounded-3xl'>
      <div className='p-8'>
        <img src={Star} alt='Star' className='star mb-6' />
        <h1 className='text-white font-bold text-3xl mb-3'>How did we do?</h1>
        <div className='flex flex-col justify-center items-center'>
          <p className='light-white mb-8'>
            {" "}
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>{" "}
          <div className='w-[340px]'>
            <ul className='flex justify-between items-center light-white text-center'>
              {listItems}
            </ul>
          </div>
          <button
            className='w-[340px] mt-6 text-white p-2 btn rounded-full font-bold'
            onClick={() => setCount(true)}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}
function Feedback() {
  return (
    <div>
      You selected out of 5 Thank you! We appreciate you taking the time to give
      a rating. If you ever need more support, don’t hesitate to get in touch!
    </div>
  )
}

function App() {
  return (
    <div className='v-center flex justify-center items-center'>
      <Rating />
    </div>
  )
}

export default App
