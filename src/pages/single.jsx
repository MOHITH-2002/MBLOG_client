import {React,useEffect,useState,useContext} from 'react'
import Menu from "../components/Menu";
import {AuthContext} from '../context/authContext.js'

// import ReactDOM from 'react-dom'
import { Link,useLocation,useNavigate } from "react-router-dom";
import axios from "axios"
import moment from "moment"/// fetch the time when we updated
const Single = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const[post,setPost] =useState([]) ;

  //we want another function i.e to split the paths because we want post id
  const PostId = location.pathname.split("/")[2];
  ///  "/"is for localhost:3000/post/1 there are 2 /(slashes i.e means upto 3000 is one path ,post is another path and 1 means id is another path so we need id so in array it is 2)

  useEffect(() => {
    const FetchData = async () => {
      try {
        // const res = await axios.get("/posts"); it is only for post but if we want to reach the categroy we nned cat function
        const res = await axios.get(`/posts/${PostId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchData();
    
  },[PostId]);

  const {currentUser} = useContext(AuthContext);

  const handleDelete = async ()=>{
    try{
      await axios.delete(`/posts/${PostId}`);
      navigate("/")
    }
    catch(err){
      console.log(err);
    }
  }
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="single">
    <div className='content'>
      <div className='postimg'>
      <img  className='imgs' src={`../upload/${post?.img}`}alt="" />

      </div>

      <div className='user'>
        
    { post.userImg && <img src={post.userImg} alt=""/>}
        
        
        <div className='info'>
          
        <span>{post.username}</span>
        <p>{moment(post.date).fromNow()}</p>

        </div> 
        { currentUser.username === post.username  &&
        (<div className='edit'>
        <Link className='editbutton' to={`/write?edit=2`} state={post} ><i class="fa-sharp fa-solid fa-pen"></i></Link>
        <Link className='editbutton1' onClick={handleDelete}><i class="fa-solid fa-trash"></i></Link>
        </div>)}
      </div>
      <h1>{post.title}</h1>
    
      <p>{getText(post.disc)}</p>
    
      </div>
    <div className='menu'>
  <Menu cat={post.cat}/>
    </div>

      
      
    </div>
  )
}

export default Single;
