import { useState } from "react";
import useConversation from "../zustand/useConversation"

const useSendMessaage = () => {
    const [loading,setLoading] = useState(false)
    const {selectConversation, messages, setMessages} = useConversation();
    const sendMessage = async (message) =>{
        try {
            setLoading(true);
            const res =  await fetch(`/api/messages/send/${selectConversation._id}`,{
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
            setMessages([...messages, data.message])
        } catch (error) {
            
        }finally{
            setLoading(false)
        }
    }
    return {sendMessage,loading}
}

export default useSendMessaage