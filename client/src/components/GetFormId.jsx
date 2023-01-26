import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const GetFormId = () => {
const navigate = useNavigate()
  const [id,setId] = useState("")
  const [message,setMessage] = useState("")
  useEffect(()=>{
    setTimeout(() => {
        setMessage("")
    }, 3000);
  },[message])
  const isIdValid = (e)=>{
    e.preventDefault()
    axios.get(`/form/${id}`)
    .then(response=>{
        navigate(`${id}`)
    })
    .catch(err=>{
        console.log(err)
        navigate('/error')
        setMessage("Please try again!!")
    })
  }
    return (
    <div>
        {
            message.length > 0  && <h1>{message}</h1>
        }
        <form onSubmit={isIdValid}>
            <span>Enter Form Id</span>
            <input type="text" name="id" value = {id} onChange={(e)=>{setId(e.target.value)}} required placeholder='Enter Form Id'/>
            <button type="submit">Fill Form</button>
        </form>
    </div>
  )
}

export default GetFormId