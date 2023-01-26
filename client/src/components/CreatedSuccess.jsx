import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CreatedSuccess = () => {
  const params = useParams()
  const id = params.id
  const url = new URL(document.URL).origin + "/fill-form/"+id
  const [message,setMessage] = useState("")
  useEffect(()=>{ 
    setTimeout(() => {
      setMessage("")
    }, 3000);
  },[message])
  const copyToClipBoard = ()=>{
    navigator.clipboard.writeText(url)
    setMessage("Link Copied successfully")
  }
  return (
    <div>
      {
        message.length > 0 && <h1>{message}</h1>
      }
      <h1>Form has been created successfully</h1>
      <Link to={`/fill-form/${id}`} >Click here to fill the form</Link>
      <div>
        <button onClick={copyToClipBoard}>Click to share the form's link</button>
      </div>
    </div>
  )
}

export default CreatedSuccess