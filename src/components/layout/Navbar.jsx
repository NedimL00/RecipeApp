import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useContext } from 'react';
import LikeContext from '../../context/like/LikeContext';




function Navbar() {

  const { active, setActive } = useContext(LikeContext);

  const openIcon = <AiFillHeart className='navLikeIcon' onClick={() => setActive(!active)}/>

  const closedIcon = <AiOutlineHeart className='navLikeIcon' onClick={() => setActive(!active)}/>


return (
  <nav className="navbar">
    <div className='container'>
      <div className="logo">
        <Link to="/" >Recipe App</Link>
      </div>
      <div className='navbarRight'>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li> 
        </ul>
        {active ? openIcon : closedIcon}
      </div>
  

    </div>
  </nav>

)
}

export default Navbar