import React from 'react'
import axios from 'axios'
// import { response } from 'express'
import {useNavigate} from "react-router-dom"

const Register = () => {
  const [inputs,setInputs]=React.useState({
    username:"",
    email:"",
    password:""
})
const [err,setErr]=React.useState(null)
const navigate = useNavigate()



const handleChange = e => {
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
}
const handleSubmit = async e => {/// async is function to combine both client and api and we need to install axios
  
  e.preventDefault()/// when we click on the submit button it will not to go refesh the page  vvvvvvipppppp
  try{
  await axios.post("/auth/register", inputs)
  // api ie http:localhost:5000/api/ or in package.json we add "proxy":"http:localhost:5000/api/"
  navigate("/login")
  }
  catch(err){
   setErr(err.response.data);
  }

}

  return (
    <div className="login">
    <h1>Register</h1>
    <form>
      <input required type="text" name='username' placeholder="Username" onChange={handleChange}></input>
      <input required type="email" name="email" placeholder="Email" onChange={handleChange}></input>
      <input required type="password" name="password" placeholder="password" onChange={handleChange}></input>
      <button onClick={handleSubmit}>Register</button>
      {err && <p >user is already registered..!</p>}
      <span>Do you have an account? <a href="/login">Login</a></span>
      
    </form>
   
      
    </div>
  )
}

export default Register 
