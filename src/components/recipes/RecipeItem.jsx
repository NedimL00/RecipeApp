import React, { useCallback, useEffect, useState } from 'react';
import { FaCheck, FaThumbsUp, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useContext } from 'react';
import LikeContext from '../../context/like/LikeContext';

function RecipeItem({recipe}) {

  const [liked, setLiked] = useState(false);
  const { addLiked, removeLiked, likedRecipes, active} = useContext(LikeContext);
  const likeBoxItems = {
    id: recipe.id,
    image: recipe.image,
    title: recipe.title,
  }


  function checkIfCheap(item) {

    if(item === true) {
      return <FaCheck className='icon' style={{color:'#698F4A', verticalAlign:'middle'}} />;
    } else {
      return <FaMinus style={{color:"#B42C14", verticalAlign:'middle'}} />;
    }
  }



  function checkIfDairyFree(item) {
    if(item === true) {
      return <FaCheck style={{color:'#698F4A', verticalAlign:'middle'}} />;
    } else {
      return <FaMinus style={{color:"#B42C14", verticalAlign:'middle'}} />;
    }
  }

  function handleLike () {
    addLiked(recipe.id, likeBoxItems);
    setLiked(true)
  }

  function handleDislike() {
    removeLiked(recipe.id);
    setLiked(false)
  }



  useEffect(()=>{

    const getInfo = JSON.parse(localStorage.getItem(`added_${recipe.id}`))

      if(getInfo) {
        setLiked(true)
      }
      else{
        setLiked(false)
      }


  }, [liked, active])



if( liked ) {
  return (
    <div className="box" /* style={{backgroundImage: `url(${recipe.image})`}} */>
      
      <Link to={`/tutorial/${recipe.id}`} className='image-link' ><img className='img-recipe' src={recipe.image} alt="Image not found" /></Link>
      <Link to={`/tutorial/${recipe.id}`} title={recipe.title}><h2>{recipe.title}</h2></Link>
      <hr />
      <p>
        <span><FaThumbsUp style={{color:"#0084FF", verticalAlign:'middle'}}/> : {recipe.aggregateLikes}</span>
        <span>Cheap: {checkIfCheap(recipe.cheap)}</span>
        <span>Dairy free: {checkIfDairyFree(recipe.dairyFree)}</span>
        <span>Time to make: {recipe.readyInMinutes} minutes</span>
        <span className='likeIconSpan'>Add to Favorites: <AiFillHeart onClick={handleDislike} style={{color:'#9E2A47', verticalAlign:'middle'}} /></span>
      </p>
    </div>
  )
} else {
  return (
    <div className="box" /* style={{backgroundImage: `url(${recipe.image})`}} */>
      
      <Link to={`/tutorial/${recipe.id}`} className='image-link' ><img className='img-recipe' src={recipe.image} alt="Image not found" /></Link>
      <Link to={`/tutorial/${recipe.id}`} title={recipe.title}><h2>{recipe.title}</h2></Link>
      <hr />
      <p>
        <span><FaThumbsUp style={{color:"#0084FF", verticalAlign:'middle'}}/> : {recipe.aggregateLikes}</span>
        <span>Cheap: {checkIfCheap(recipe.cheap)}</span>
        <span>Dairy free: {checkIfDairyFree(recipe.dairyFree)}</span>
        <span>Time to make: {recipe.readyInMinutes} minutes</span>
        <span className='likeIconSpan'>Add to Favorites: <AiOutlineHeart onClick={handleLike} style={{verticalAlign:'middle'}} /></span>
      </p>
    </div>
  ) 
  }

}
export default RecipeItem