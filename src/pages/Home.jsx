import {React,useState,useEffect} from "react"
import { Link,useLocation } from "react-router-dom";
import axios from 'axios';


const Home = () => {

  const cat = useLocation().search;

  const[posts,setPosts] =useState([]) ;

  useEffect(() => {
    const FetchData = async () => {
      try {
        // const res = await axios.get("/posts"); it is only for post but if we want to reach the categroy we nned cat function
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchData();
    
  },[cat]);
  
  return (
    
    <div className="home">
    <div className="posts">
    {posts.map((post)=>(
<div className='post' key={post.id}>
<div  className='img'> 
  <img src={`../upload/${post.img}`} alt=""/></div>
  <div className='content'> 
  <Link className='link' to={`/post/${post.id}`}>
    <h1 >{post.title}</h1>
  </Link>
  <p>{post.disc}</p>
  <Link className='button' to={`/post/${post.id}`}>Read More</Link>
</div>
</div>

    ))}
    </div>
      
    </div>
  )
}

export default Home;
