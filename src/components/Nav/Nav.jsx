import images from '../../constants/images';
import './Nav.css';

const Nav = () => { 
  
    return (
      <nav className="app__nav">
        <div className="app__nav-logo">
          <h1 className='logo'>Plantify</h1>
        </div>
        <div className="app__nav-links">
        <ul className="app__nav-links-pages">
            <li><a href="/">Shop Plants</a></li>
            <li><a href="/">Shop Tools</a></li>
            <li><a href="/">Classes</a></li>
            <li><a href="/">Find a store</a></li>
          </ul>
          <ul className="app__nav-links-members">
            <li>
              <a href="/">
                <img src= {images.user} alt="" />
                <p>Login</p>
              </a>
            </li>
            <li>
              <a href="/">
                <img src= {images.cart} alt="" />
                <p>Cart</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
    };
  
  export default Nav;
  