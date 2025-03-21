import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Layout from "./components/Layout";
import { AuthLayout } from "./auth/AuthLayout";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import NotFound from "./pages/NotFound";
import { User } from "./pages/User";
export default function AppRoutes() {
  let token = localStorage.getItem('token')
  console.log(token)
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={token ? <Layout /> : <Navigate to='/auth/signin'/>}>
        <Route path="" element={<Home></Home>} />
        <Route path="user/:id" element={<User/>}/>
        <Route path="profile" element={<Profile />} />
        <Route path="test" element={<h1>Bonjour</h1>} />
      </Route>

      <Route path="/auth" element={!token ? <AuthLayout /> : <Navigate to="/"/>}>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      
      <Route path="/logout" element={<Navigate to="/"/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  )
}
