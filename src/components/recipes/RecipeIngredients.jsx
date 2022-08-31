import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import Spinner from '../layout/Spinner';

function RecipeIngredients({ ingredients }) {
  if(Array.isArray(ingredients) === true) {
    return (
      <ul className='ingredientsList'>
        {ingredients.map((ingredient) => {
          return <li className='ingredient'>{<FaUtensils/>}  {ingredient.original}</li>
        })}
      </ul>
  )
  }
  else {
    return (
      <Spinner />
    )
  }

}

export default RecipeIngredients