import {React,useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

const Menu = ({cat}) => {

  const [posts,setPosts] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        // const res = await axios.get("/posts"); it is only for post but if we want to reach the categroy we nned cat function
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchData();
    
  },[cat]);
  return (
    <div className='menu'>
      <div className='heading'>
        <h1>Other post you may like</h1>

      </div>
      <div className='posts'>
        {posts.map((post)=>(
            <div className='post' key={post.id}>
            <img src={`../upload/${post.img}`} alt=""></img>
            <h1>{post.title}</h1>
           
            <Link className='button' to={`/post/${post.id}`}>Read More</Link>
            </div>

        ))}
      </div>
    </div>
  )
}

export default Menu
