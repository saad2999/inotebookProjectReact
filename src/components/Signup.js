import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';


const Signup = (props) => {
  const [credentials ,setCredential]=useState({name:"",email:"",password:"",cpassword:""})
  let navigate = useNavigate();


    const SubmitHandler= async (e) => {
        e.preventDefault()
        const {name,email,password}=credentials
        const response = await fetch(`http://localhost:5000/api/auth/createuser`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify({name,email,password})
        })
        const json = await response.json()
        console.log(json)
        if(json.success)
        {
          //redirect
          localStorage.setItem("token",json.authToken)
          navigate("/")
          props.showAlert("acccount created successfully","success")

        }
        else{
          props.showAlert("Signup  failed","danger")
          
        }
    }
    const onChange=(e) =>{
      setCredential({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div className='my-2'>
      <h2>create a account to use inotebook</h2>
      <form onSubmit={SubmitHandler}>
  <div className="my-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control"  onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="my-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control"  onChange={onChange} id="name" name="name" aria-describedby="nameHelp"/>
  
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange} name='password' id="password"/>
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Conform Password</label>
    <input type="password" className="form-control" onChange={onChange} name='cpassword' id="cpassword"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Sign Up</button>
</form>
    </div>
  )
}

export default Signup
