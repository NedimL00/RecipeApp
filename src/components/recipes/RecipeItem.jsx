import React from 'react';
import { FaCheck, FaThumbsUp, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function RecipeItem({recipe}) {


  function checkIfCheap(item) {

    if(item === true) {
      return <FaCheck style={{color:'#698F4A', verticalAlign:'middle'}} />;
    } else {
      return <FaMinus style={{color:"#B42C14", verticalAlign:'middle'}}/>;
    }
  }


  function checkIfDairyFree(item) {
    if(item === true) {
      return <FaCheck style={{color:'#698F4A', verticalAlign:'middle'}} />;
    } else {
      return <FaMinus style={{color:"#B42C14", verticalAlign:'middle'}}/>;
    }
  }


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
      </p>
    </div>
) 



}
export default RecipeItem