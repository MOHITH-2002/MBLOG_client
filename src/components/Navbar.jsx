import {React,useContext} from 'react'
import Logo from "../img/logo.png"
import { Link } from "react-router-dom";
import { AuthContext } from '../context/authContext';


const Navbar = () => {

  const {currentUser , logout}  = useContext(AuthContext);
  // const {logout}  = useContext(AuthContext);
  return (
    <div className='navbar'>
    <div className='container'>
    <div className='logo'>
    <Link to="/">
      <img src={Logo} alt=""></img>

      </Link>
    </div>
    <span>{currentUser?.username}</span>
    <div className='links'>
    <nav class="navbar navbar-expand-lg">
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ms-auto">
          <Link className='link'to="/?cat=art" ><h5>Art</h5></Link>
      <Link className='link' to="/?cat=food" ><h5>Food</h5></Link>
      <Link className='link' to="/?cat=science" ><h5>Science</h5></Link>
      <Link className='link' to="/?cat=Technology" ><h5>Technology</h5></Link>
      <Link className='link' to="/?cat=cinema"><h5>Cinema</h5></Link>  
      
   {currentUser ? (<Link onClick={logout} to="/login" className='logout'>Logout</Link>):
   (<Link to="/login" className='logout'>Login</Link>)}
      <span className='compose'>
        <Link  className='link' to="./write"><i class="fa-solid fa-pen-to-square fa-2x"></i></Link>
      </span>
          </ul>
        </div>
      </nav>
  </div>
  </div>
      
    </div>

    
      

  )
}

export default Navbar
