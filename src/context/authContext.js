import { createContext,React,useState,useEffect }from "react";
import axios from "axios";
export const AuthContext = createContext();


const AuthContextProvider = ({children})=>{
    
    
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem("user"))|| null);// || or gate

    const login = async(inputs)=>{
       const res= await axios.post("/auth/login", inputs)
  // api ie http:localhost:5000/api/ or in package.json we add "proxy":"http:localhost:5000/api/" 
    
        setCurrentUser(res.data)

    }


    const logout = async(inputs)=>{
       await axios.post("/auth/logout")
  // api ie http:localhost:5000/api/ or in package.json we add "proxy":"http:localhost:5000/api/" 
    
        setCurrentUser(null); 

}

useEffect(() => {
    localStorage.setItem("user",JSON.stringify(currentUser))
   
}, [currentUser]);
return <AuthContext.Provider value={{currentUser,login,logout}}>{children}</AuthContext.Provider>
}

 export default AuthContextProvider
 