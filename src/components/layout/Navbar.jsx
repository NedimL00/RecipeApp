import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { TbToolsKitchen2 } from 'react-icons/tb';
import { FaBars, FaTimes } from 'react-icons/fa';
import LikeContext from '../../context/like/LikeContext';




function Navbar() {
  


  const { active, setActive } = useContext(LikeContext);
  const [clicked, setClicked] = useState (true);

  const openIcon = <AiFillHeart className='navLikeIcon' onClick={() => setActive(!active)}/>

  const closedIcon = <AiOutlineHeart className='navLikeIcon' onClick={() => setActive(!active)}/>


  const handleHamburger = () => {
    setClicked(!clicked);
  }

  const hamburgerIcon = <FaBars className='hamburgerIcons' onClick={handleHamburger} />
  const closeHamburgerIcon = <FaTimes className='hamburgerIcons' onClick={handleHamburger} />

return (
  <nav className="navbar noSelect">
    <div className='container'>
      <div className="logo">
        <Link to="/" >
          <TbToolsKitchen2 size={'1.5em'}/>
          <span>Recipe App</span>
        </Link>
      </div>
      <div className='navbarRight'>
      <ul className={`nav ${!clicked ? 'handleHamburger' : ''}`}>
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
        {clicked ? closeHamburgerIcon : hamburgerIcon}
        {active ? openIcon : closedIcon}
      </div>
  

    </div>
  </nav>

)
}

export default Navbar