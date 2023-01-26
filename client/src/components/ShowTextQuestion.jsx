import React from 'react'

const ShowTextQuestion = ({question,index,setAns,ans}) => {
  const handleAnsChange = (e)=>{
    const {value} = e.target
    setAns(prev=>{
      let temp = prev
      temp[index] = value
      return [...temp]
    })
  }
  return (
    <div>
      <p><span>{index+1}. </span>{question.question}</p>
      <input type="text" required placeholder = {"Type ans of above question here"} value = {ans} onChange={handleAnsChange}/>
    </div>
  )
}

export default ShowTextQuestion