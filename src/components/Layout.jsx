import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
        <Navbar></Navbar>
           <main>
                <Outlet />
            </main>  
        <footer>Copyrights</footer>
    </div>
  )
}
