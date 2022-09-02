import React, { useContext, useState } from 'react';
import LikeContext from '../../context/like/LikeContext';
import { FaTimes } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';


function LikedRecipes() {

  const { style, active, setActive, removeLiked, likedRecipes, loaded} = useContext(LikeContext);

  const handlePropagation = (e) => {
    e.stopPropagation();
  }


  const handleRemove = (id) => {
    localStorage.setItem(`added_${id}`, 'false');
    removeLiked(id);
  }




if(!loaded && likedRecipes.length !== 0) {
  return (
    <div className={`${style}`} onClick={() => setActive(!active)}>
      <div className='container likeCard' onClick={handlePropagation}>
        <div className='likeCardIcon'>
          <FaTimes onClick={() => setActive(!active)}/>
        </div>
        <div className="likeCardItems scroll4">
          {likedRecipes.map((item) => {
            return (
            <div key={item.id} className='likeCardItem'>
              <Link to={`tutorial/${item.id}`} ><img src={item.image} /></Link>
              <div className='itemContent'>
                <p>{item.title}</p>
                <div className='itemContentSpan'>
                  <span><Link to={`tutorial/${item.id}`} ><BsBoxArrowUpRight/></Link></span>
                  <span><FiTrash2 className='garbageIcon' onClick={() => {handleRemove(item.id)}}/></span>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} else {
  return (
    <div className={`${style}`} onClick={() => setActive(!active)}>
      <div className='container likeCard' onClick={handlePropagation}>
        <div className='likeCardIcon'>
          <FaTimes onClick={() => setActive(!active)}/>
        </div>
        <h2>No Liked Recipes Yet</h2>
      </div>
    </div>
  )
}

}

export default LikedRecipes
