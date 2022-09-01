import React from 'react';
import { useContext } from 'react';
import LikeContext from '../../context/like/LikeContext';
import { FaTimes } from "react-icons/fa";


function LikedRecipes() {

  const { style, active, setActive } = useContext(LikeContext)

  const handlePropagation = (e) => {
    
    e.stopPropagation();
  }

  return (
    <div className={`${style}`} onClick={() => setActive(!active)}>
      <div className='container likeCard' onClick={handlePropagation}>
        <div className='likeCardIcon'>
          <FaTimes onClick={() => setActive(!active)}/>
        </div>

          <div className="likeCardItems scroll4">
            <div className='likeCardItem'></div>
          </div>
      </div>
    </div>

  )
}

export default LikedRecipes