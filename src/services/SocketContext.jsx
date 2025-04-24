import { createContext, useContext, useEffect, useState } from "react";
import {io} from "socket.io-client"
import { UserContext } from "./UserContext";
import Swal from "sweetalert2";
export const SocketContext = createContext()

export const SocketProvider = ({children})=>{

    const socket = io('http://localhost:3000')
    const[connectedUsers , setUsers] = useState([])
    useEffect(()=>{

        socket.on('connect' , ()=>{
            console.log('connected to socketIO')

            socket.emit('setup' , localStorage.getItem('token'))
        })

        socket.on('connectedUsers' , (list)=>{
            setUsers(list)
        })
        socket.on('pingResult' , ()=>{
            Swal.fire({
                title : 'Hello',
                toast : true,
                timer : 3000,
                showConfirmButton : false,
                position : 'bottom-end'
            })
        })
    },[])

    const ping = (userId)=>{
        socket.emit('ping' , userId)
    }
    return <SocketContext.Provider value={{connectedUsers , ping}}>
        {children}
    </SocketContext.Provider>
}