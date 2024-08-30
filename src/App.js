import { Routes , Route } from "react-router-dom";
import HomePage from "../pages/homaPage/homePage";
import AboutUsPage from "../pages/aboutUsPage/aboutUsPage";
import ContactUsPage from "../pages/contactUsPage/contactUsPage";
import LoginPage from "../pages/login/loginPage";
import RegisterPage from "../pages/registerPage/register";
import Profile from "../pages/profile/profile";
import VerfyEmailPage from "../pages/verfyEmailPage/verfyEmail";


export function App() {
    return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path = "/aboutUs" element = {<AboutUsPage/>}/>
        <Route path = "/contactUs" element = {<ContactUsPage/>}/>
        <Route path = "/login" element = {<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path="/:email/verfy/:userToken" element={<VerfyEmailPage />} />
      </Routes>
    );
  }