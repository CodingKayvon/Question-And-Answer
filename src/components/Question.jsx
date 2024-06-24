import React, { useState } from 'react'
import './Question.css'

const Question = () => {

  const [swap, setSwapped] = useState("Question: How many licks does it take to get to the center of a Tootsie Pop?"); //Initial State

 
  const handleClick = () => {

      //Assigning Text As Question on Click
      //If Text == Question || Set Text as Answer
      //If Text != Question || Set Text as Question 
    setSwapped(swap === "Question: How many licks does it take to get to the center of a Tootsie Pop?" ? "Answer: It takes roughly 365 licks to get to the center of a Tootsie Pop." 
    : 
    "Question: How many licks does it take to get to the center of a Tootsie Pop?")
  }
  
  return (
    <div className='Question-w'>
      <p className='Question-text'
        onClick={()=> handleClick()} //run handleClick function
      >
       {swap} {/* Assigning Text as Initial State */}
      </p>

    </div>
  )
}

export default Question