import {React,useContext,useState} from 'react'
// import axios from 'axios'
import {AuthContext} from '../context/authContext.js'
import {useNavigate} from "react-router-dom"



const Login = () => {
  const [inputs,setInputs]=useState({
    username:"",
    password:""
})
const [err,setErr]=useState(null)
const navigate = useNavigate()


const {login} = useContext(AuthContext);
 
const handleChange = e => {
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
}
const handleSubmit = async e => {/// async is function to combine both client and api and we need to install axios
  
  e.preventDefault()/// when we click on the submit button it will not to go refesh the page  vvvvvvipppppp
  try{
  await login(inputs)
  navigate("/")// navigated to home page
  }
  catch(err){
   setErr(err.response.data);
  }

}
  return (
    <div className="login">
    <h1>Login</h1>
    <form>
      <input required type="text" placeholder='Username' className="" name="username" onChange={handleChange}></input>
      <input required type="password" placeholder='Password' className="" name="password" onChange={handleChange}></input>
      <button onClick={handleSubmit}>Login</button>
      {err && <p>User not found</p>}
      <span>Don't have an account ? <a href="/register">Register</a>

      </span>
      
    </form> 
      
    </div>
  )
}

export default Login;