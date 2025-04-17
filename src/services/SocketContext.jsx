import { createContext, useEffect } from "react";
import {io} from "socket.io-client"
export const SocketContext = createContext()

export const SocketProvider = ({children})=>{

    const socket = io('http://localhost:3000')
    useEffect(()=>{

    },[])
    return <SocketContext.Provider value={{}}>
        {children}
    </SocketContext.Provider>
}