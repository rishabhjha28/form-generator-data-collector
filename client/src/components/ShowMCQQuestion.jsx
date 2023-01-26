import React from 'react'

const ShowMCQQuestion = ({question,index,ans,setAns}) => {
  const handleChange = (e)=>{
    const {value} = e.target
    setAns(prev=>{
      let temp = prev
      prev[index] = value
      return [...temp]
    })
  }
  return (
    <div>
      <p><span>{index+1}. </span>{question.question}</p>
      <input required onChange={handleChange} type="radio" name={`ans${index}`} value={0}/>{question.options[0]}
      <input required onChange={handleChange} type="radio" name={`ans${index}`} value={1}/>{question.options[1]}
      <input required onChange={handleChange} type="radio" name={`ans${index}`} value={2}/>{question.options[2]}
      <input required onChange={handleChange} type="radio" name={`ans${index}`} value={3}/>{question.options[3]}
    </div>
  )
}

export default ShowMCQQuestion