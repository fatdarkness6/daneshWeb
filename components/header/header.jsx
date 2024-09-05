import { useEffect, useRef } from 'react';
import img from '../../public/headers-logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  let lastScrollTop = 0;
  let header = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(null);
  let [active, setActive] = useState(false);
  let [page , setPage] = useState("")
 
  const getTokenFromLocalStorage = localStorage.getItem('token');



  useEffect(() => {
    window.addEventListener('scroll', function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    let path = window.location.pathname
    setPage(path)
  }, []);
  return (
    <div
      ref={header}
      style={scrollDirection == 'down' ? { top: '-150px' } : { top: '0px' }}
      className='header'>
      <div className='wrapper'>
        <div className='header-content flex-alignCenter-spaceBetween '>
          <div className='header-logo'>
            <Link  to='/'>
              <img src={img} />
            </Link>
          </div>
          <div className='header-menu '>
            <div className='header-menu-text flex-alignCenter gap-30'>
              <Link className={page == "/"? "act" : ""} to='/'>
                <h3>Home</h3>
              </Link>
              <Link className={page == "/login" || page == "/register" ? "act" : ""} to={getTokenFromLocalStorage ? "/profile" : "/login"}>
                <h3>{getTokenFromLocalStorage ? "Profile" : "Login / Register"}</h3>
              </Link>
              <Link className={page == "/aboutUs"? "act" : ""} to='/aboutUs'>
                <h3>Chi Siamo </h3>
              </Link>
              <Link className={page == "/contactUs"? "act" : ""} to='/contactUs'>
                <h3>Contatti</h3>
              </Link>
              <h3>News</h3>
            </div>

            <div
              onClick={() => {
                setActive(!active);
              }}
              className='header-menu-btn'>
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
      <div id={active ? 'show' : 'dontShow'} className='hambergerMenu'>
        <div className='hambergerMenu-content'>
          <div className='hambergerMenu-content-logo'>
            <h2>Menu</h2>
            <div
              id={active ? 'normal' : 'notNormal'}
              onClick={() => {
                setActive(false);
              }}
              className='x'>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className='hambergerMenu-content-menuItems'>
            <div id = {page == "/" && "transform"} className='hambergerMenu-content-homePage'>
              <Link to='/'>
                <h3>Home</h3>
              </Link>
            </div>
            <div id = {page == "/login" || page == "/register"  && "transform"} className='hambergerMenu-content-homePage'>
              <Link to='/login'>
                <h3>Login / Register</h3>
              </Link>
            </div>
            <div id = {page == "/aboutUs" && "transform"} className='hambergerMenu-content-aboutUsPage'>
              <Link to='/aboutUs'>
                <h3>Chi Siamo</h3>
              </Link>
            </div>
            <div id = {page == "/contactUs" && "transform"} className='hambergerMenu-content-contactUsPage'>
              <Link to='/contactUs'>
                <h3>Contatti</h3>
              </Link>
            </div>
            <div className='hambergerMenu-content-newsPage'>
              <h3>News</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
