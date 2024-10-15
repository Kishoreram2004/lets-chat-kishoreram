import {useState} from 'react'
import toast from "react-hot-toast";



const userSignup = () => {
  const [loading, setLoading] = useState(false);
  const signup = async({fullName,userName, password, confirmPassword, gender})=>{
    const success = handleInputErrors({fullName,userName, password, confirmPassword, gender})
    if(!success) return
    setLoading(true);
    try {
        const res = await fetch("/api/auth/signup",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({fullName,userName, password, confirmPassword, gender})
        })

        const data =await res.json();
        console.log(data);

    } catch (error) {
        toast.error(error.message)
    }

  }
  return {loading, signup}
}


export default userSignup


function handleInputErrors({fullName,userName, password, confirmPassword, gender}){
    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error("Please fill all the field!");
        return false;
    }

    if(password  != confirmPassword){
        toast.error("Password do not match");
        return false;
    }

    if (password.length < 6 ){
        toast.error("Password must be atleast 6 characters")
        return false
    }
    return true;
}