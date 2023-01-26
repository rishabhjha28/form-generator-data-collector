import React from 'react'
import { Link } from 'react-router-dom'

const FormFilledSuccess = () => {
  return (
    <div>
        <h1>Ypur response has been recorded</h1>
        <Link to={'/fill-form'}>Fill More Form?</Link>
    </div>
  )
}

export default FormFilledSuccess