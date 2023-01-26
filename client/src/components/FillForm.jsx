import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ShowMCQQuestion from './ShowMCQQuestion'
import ShowTextQuestion from './ShowTextQuestion'

const FillForm = () => {
  const params = useParams()
  const navigate= useNavigate()
  const id = params.id
  const [dataFound,setDataFound] = useState(false)
  const [question,setQuestion] = useState({})
  const [userName,setUserName] = useState("")
  const [ans,setAns] = useState(["","","","",""])
  const [message,setMessage] = useState("")
  useEffect(()=>{
    setMessage("")
  },[message])
  const getForm = ()=>{
    axios.get(`/form/${id}`)
    .then(response=>{
      if(response.data._id){
        setDataFound(true)
        setQuestion(response.data)
      }
    })
    .catch(err=>{
      console.log(err)
    })
  }
  console.log(ans)
  useEffect(()=>{
    getForm()
  },[])
  const submitForm =(e)=>{
    e.preventDefault()
    const ansList = ans.filter(e=>e.length>0)
    const data = {
      userName:userName,
      formId:id,
      formResponse:ansList
    }
    axios.post('/response',data)
    .then(doc=>{
      if(doc.data){
        navigate('/form-filled-success',{replace:true})
      }
    })
    .catch(err=>{
      setMessage("Couldn't get response please try again")
    })
  }
  return(
    <div>
      {
        message.length>0 && <h1>{message}</h1>
      }
      {
        dataFound ?
        <div>
          <h1>{question.formName}</h1>
          <form onSubmit={submitForm}>
            <p>What is your Name</p>
            <input type="text" required name = 'userName' value = {userName} onChange={(e)=>{setUserName(e.target.value)}} />
            {
              question.formData.map((question,index)=>{
                if(question.type === "text"){
                  return <ShowTextQuestion ans={ans[index]} index ={index} question={question} key={index} setAns={setAns}/>
                }
                else{
                  return <ShowMCQQuestion question={question} key={index} setAns={setAns} index = {index}/>
                }
              })
            }
            <button type="submit">Submit Form</button>
          </form>
        </div>:
        <div>
          <h1>Data not found please <Link to={'/fill-form'}>try again</Link> or invalid link</h1>
        </div>
      }
    </div>
  )
}

export default FillForm