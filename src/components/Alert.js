import React from 'react'

function Alert(props) {
    const captalize=(word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)

    }
  return (
  <div style={{ height:'50px'}}> 
         <div className="alert alert-primary" role="alert">
      <strong> { props.message} </strong>
      </div>
    
</div>
  )
}

export default Alert