import { useState } from "react";
import useConversation from "../zustand/useConversation"

const useSendMessage = () => {
    const [loading,setLoading] = useState(false)
    const {selectedConversation, messages, setMessages} = useConversation();
    const sendMessage = async (message) =>{
        setLoading(true);
        try {
            
            const res =  await fetch(`/api/messages/send/${selectedConversation._id}`,{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({message})
            })
            const data = await res.json();
            if(!data){
                throw new Error(message.error);
            }
            setMessages([...messages, data])
            
        } catch (error) {
            
        }finally{
            setLoading(false)
        }
    }
    return {sendMessage,loading};
}

export default useSendMessage