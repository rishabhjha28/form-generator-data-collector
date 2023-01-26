import React from 'react'

const ShowQuestions = ({questions}) => {
  return (
    <div>
      {
        questions.map((element,index)=>{
          if(element.type === 'mcq'){
            return(
              <div>
                <div>
                  <p>{index+1}. {element.question}</p>
                </div>
                <div>
                  {
                    element.options.map((e,i)=><p key = {i}>option {i+1}. {e}</p>)
                  }
                </div>
              </div>
            )
          }
          else{
            return(
            <div>
              <p>{index+1}. {element.question}</p>
            </div>
            )
          }
        })
      }
    </div>
  )
}

export default ShowQuestions