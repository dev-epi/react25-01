import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile/Profile";
import Layout from "./components/Layout";
import { AuthLayout } from "./auth/AuthLayout";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import ForgotPassword from "./auth/ForgotPassword";
import ResetPassword from "./auth/ResetPassword";
import NotFound from "./pages/NotFound";
import { User } from "./pages/User";
import { useContext } from "react";
import { UserContext } from "./services/UserContext";
import Feedbacks from "./pages/feedbacks/Feedbacks";
import { Provider } from "react-redux";
import { store } from "./redux/store";
export default function AppRoutes() {

  let {token} = useContext(UserContext)
  return (
    <BrowserRouter>
    <Routes>
    
      <Route path="/" element={token ? <Provider store={store}><Layout /> </Provider> : <Navigate to='/auth/signin'/>}>
        <Route path="" element={<Home></Home>} />
        <Route path="user/:id" element={<User/>}/>
        <Route path="profile" element={<Profile  />} />
        <Route path="feedbacks/:userId" element={<Feedbacks  />} />
        <Route path="test" element={<h1>Bonjour</h1>} />
      </Route>

      <Route path="/auth" element={!token ? <AuthLayout /> : <Navigate to="/"/>}>
        <Route path="signin" element={<Signin  />} />
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
