import { useEffect, useRef } from 'react';
import img from '../../public/headers-logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  let lastScrollTop = 0;
  let header = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(null);
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
  }, []);

  return (
    <div
      ref={header}
      style={scrollDirection == 'down' ? { top: '-150px' } : { top: '0px' }}
      className='header'>
      <div className='wrapper'>
        <div className='header-content flex-alignCenter-spaceBetween '>
          <div className='header-logo'>
            <Link to='/'>
              <img src={img} />
            </Link>
          </div>
          <div className='header-menu '>
            <div className='header-menu-text flex-alignCenter gap-30'>
              <Link to='/'>
              <h3>Home</h3>
            </Link>

            <h3>About Us</h3>
            <h3>Contact Us</h3>
            <h3>News </h3>
            </div>
            
            <div className='header-menu-btn'>
              <div/>
              <div/>
              <div/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
