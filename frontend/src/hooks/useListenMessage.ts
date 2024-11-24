import { useEffect } from "react"
import useConversation from "../zustand/useConverasation"
import { useSocketContext } from "../context/SocketContext"
import notificationSound from "../assets/sounds/notification.mp3"
const useListenMessage= ()=>{
    const {messages,setMessages} = useConversation()
    const {socket} = useSocketContext()
    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldShake=true;
            const sound= new Audio(notificationSound)
            sound.play()
            setMessages([...messages,newMessage])
        })

        return () => {
			socket?.off("newMessage");
		};
    },[socket,messages,setMessages])
}

export default useListenMessage