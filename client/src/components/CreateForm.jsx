import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddOptions from './AddOptions'
import ShowQuestions from './ShowQuestions'
import { useNavigate } from 'react-router-dom'

const CreateForm = () => {
  const initialFormDetail = {
    type:'text',
    question:'',
    options:["","","",""]
  }
  const navigate = useNavigate()
  const [formName,setFormName] = useState("")
  const [questionArray,setQuestionArray] = useState([])
  const [isAdding,setIsAdding] = useState(false)
  const [formDetail,setFormDetail] = useState(initialFormDetail)
  const [message,setMessage] = useState("")

  useEffect(()=>{
    setTimeout(() => {
      setMessage("")
    }, 3000);
  },[message])
  const adding = ()=>{
    setFormDetail({...initialFormDetail})
    setIsAdding(!isAdding)
  }
  const createForm = (e)=>{
    const {name,value} = e.target
    setFormDetail((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const addQuestion=()=>{
    const data = formDetail.type==='text'?{
      type:formDetail.type,
      question:formDetail.question
    }:formDetail
    setQuestionArray(prev=>[...prev,data])
    setFormDetail(initialFormDetail)
    setIsAdding(false)
  }
  const addOptions = (e,i)=>{
   const {value} = e.target
   setFormDetail(prev=>{
    let t = prev
    t.options[i]=value
    return{...t}
   })
  }
  const handleFinalSubmission =()=>{
    const data = {
      formName:formName,
      formData:questionArray
    }
    if(data.formName && data.formData.length){
      axios.post('/form',data)
      .then(response=>{
        if(response.data._id){
          navigate(`/success/${response.data._id}`)
        }  
        else{
          navigate('/error')
        }
      })
      .catch(err=>{
        console.log(err)
        navigate('/error')
      })
    }
    else{
      setMessage("Please fill all the details")
    }
  }
  return (
    <div>
      <div>
        <div>
          <p>Form Name: </p>
          <input type="text" name="formName" value={formName} placeholder="Enter name of form" onChange={(e)=>setFormName(e.target.value)} />
        </div>
        <div>
          <ShowQuestions questions={questionArray}/>
        </div>
        {
          isAdding && <div>
            <p>select type of question: </p>
            <div>
              <input type="radio" name="type" value='text' checked={formDetail.type==='text'} onChange={createForm} />
              <span>Text Input</span>
              <input type="radio" name="type" value='mcq' checked={formDetail.type==='mcq'} onChange={createForm}/>
              <span>MCQ Input</span>
            </div>
            <div>
              <p>Enter Question:</p>
              <textarea  type='textarea' rows='5' name="question" value={formDetail.question} onChange={createForm} />
            </div>
            {
              formDetail.type==='mcq'&&
              <div>
                {
                  formDetail.options.map((element,index)=><AddOptions key = {index} formDetail={formDetail} addOptions={addOptions} index={index}/>) 
                }
              </div>
            }
          </div>
        }
        {
          questionArray.length < 5 && 
          <div>
            <button onClick={adding}>{isAdding?'cancel creating question':(questionArray.length===0?'create questions':'create more question')}</button>
            {
              isAdding && <button onClick={addQuestion}>add question</button>
            }
          </div>
        }
        {
          questionArray.length > 0 &&
          <div>
            <button onClick={handleFinalSubmission}>Done</button>
          </div>
        }
      </div>
      {
        message.length > 0 && <h1>{message}</h1>
      }
    </div>
  )
}

export default CreateForm