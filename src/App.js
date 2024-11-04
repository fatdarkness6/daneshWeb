import { Routes , Route } from "react-router-dom";
import HomePage from "./pages/homaPage/homePage";
import AboutUsPage from "./pages/aboutUsPage/aboutUsPage";
import ContactUsPage from './pages/contactUsPage/contactUsPage'
import LoginPage from './pages/login/loginPage'
import RegisterPage from './pages/registerPage/register'
import Profile from './pages/profile/profile'
import VerifyEmailPage from "./pages/verfyEmailPage/verfyEmail";
import NewsPage from "./pages/newsPage/newsPage";
import ProjectPage from "./pages/projectPage/projectPage";
import PlausibleAnalytics from "./components/PlausibleAnalytics/PlausibleAnalytics";


export function App() {
    return (
      <>
      <PlausibleAnalytics/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path = "/aboutUs" element = {<AboutUsPage/>}/>
        <Route path = "/contactUs" element = {<ContactUsPage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/project" element={<ProjectPage/>}/>
        <Route path = "/login" element = {<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        <Route path="/:email/verfy/:confirmEmail" element={<VerifyEmailPage />} />
      </Routes>
      </>
    );
  }