import { Routes , Route } from "react-router-dom";
import HomePage from "../pages/homaPage/homePage";
import AboutUsPage from "../pages/aboutUsPage/aboutUsPage";

export function App() {
    return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path = "/aboutUs" element = {<AboutUsPage/>}/>
      </Routes>
    );
  }