import React,{useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';

const Write = () => {
  const state =useLocation().state;/// it is from single.jsx in editing value
  const [value, setValue] = useState(state?.title || ''); // description
  const [title, setTitle] = useState(state?.disc || '');//title
  const [file, setFile] = useState(null);// img
  const [cat, setCat] = useState(state?.cat || '');///category
const navigate = useNavigate();
  const upload = async() => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
console.log(err);
    }
  }

  const handleSubmit = async e =>{
    e.preventDefault();
     const imgurl  = await upload();

     try {
      state
      ? await axios.put(`/posts/${state.id}`,{
        title,
        disc:value,
        cat,
        img:file ? imgurl:""

      }):
      await axios.post(`/posts/`,{
        title,
        disc:value,
        cat,
        img:file ? imgurl:"",
        date : moment(Date.now()).format("yyyy-dd-MM HH:mm:ss")

      })

     navigate("/");
         } catch (error) {
      console.log(error);
     }
  }
 
  
  return (
    <div className="write">
    <div className='text'>
    <input type="text" className="writing" placeholder="Title"value={title} onChange={e=>setTitle(e.target.value)}></input>
    <div className="editor">
    <ReactQuill className='edit' theme="snow" value={value} onChange={setValue} />

    </div>
    </div>
    <div></div>
    <div className="menus">
    <div className='items'>
        <h2>Publish</h2>
        <input style={{display:"none"}} type="file" id="fileupload" onChange={e=>setFile(e.target.files[0])}/>
        <label className="imgupload" htmlFor="fileupload" >upload File</label>
      <div className="buttons">
        <button>Save as draft</button>
        <button onClick={handleSubmit}>Publish</button>
      </div>
  
      </div>
      <div className='items'>
      <h2>Category</h2>
      <div className="cat">
        <input className='radio' checked={cat === "art"} type="radio" value="art" id="art" name="cat" onChange={e=>setCat(e.target.value)}/>
        <label htmlFor="art">Art</label>      </div>
        <div className="cat">
        <input className='radio' checked={cat === "food"} type="radio"  value="food"id="food" name="cat" onChange={e=>setCat(e.target.value)}/>
        <label htmlFor="food">Food</label>      </div>
        <div className="cat">
        <input className='radio' checked={cat === "science"} type="radio" value="science" id="science" name="cat" onChange={e=>setCat(e.target.value)}/>
        <label htmlFor="science">Science</label>      </div>
        <div className="cat">
        <input className='radio' checked={cat === "technology"} type="radio" value="technology" id="tech" name="cat" onChange={e=>setCat(e.target.value)}/>       
        <label htmlFor="tech">Technology</label>      </div>
        <div className="cat">
        <input className='radio' checked={cat === "cinema"} type="radio" value="cinema" id="cinema" name="cat" onChange={e=>setCat(e.target.value)}/>
        <label htmlFor="cinema">Cinema</label>      </div>
      </div>
    </div>
    </div>
    
   
  )
}

export default Write
