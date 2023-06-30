import React from 'react'

function Alert(props) {
   
  return (
  <div style={{ height:'50px'}}> 
         <div className="alert alert-primary" role="alert">
      <strong> { props.message} </strong>
      </div>
    
</div>
  )
}

export default Alert