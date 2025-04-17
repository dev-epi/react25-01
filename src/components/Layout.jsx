import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { SocketProvider } from "../services/SocketContext";

export default function Layout() {
  return (
    <div>
      <SocketProvider>
        <Navbar></Navbar>
           <main>
                <Outlet />
            </main>  
        <footer>Copyrights</footer>
        </SocketProvider>
    </div>
  )
}
