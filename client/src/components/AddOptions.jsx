import React from 'react'

const AddOptions = ({index,formDetail,addOptions}) => {
  return (
    <div>
        <span>option {index}:</span>
        <input type="text" placeholder='Enter Option' value={formDetail.options[index]} onChange = {(e)=>{addOptions(e,index)}}/>
    </div>
  )
}

export default AddOptions