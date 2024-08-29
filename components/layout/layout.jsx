import Footer from "../footer/footer";
import Header from "../header/header";

export default function Layout(props) {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}