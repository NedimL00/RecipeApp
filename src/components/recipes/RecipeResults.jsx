import React, { useContext } from 'react';
import RecipeContext from '../../context/recipe/RecipeContext';
import RecipeItem from './RecipeItem';
import Spinner from '../layout/Spinner';


function RecipeResults() {

  const {random, recipes, recipe, loading} = useContext(RecipeContext);


if(!loading && random && Object.keys(recipes).length !== 0 ) { //return for RANDOM RECIPES
  



  return (
    <section className='boxes'>
      <div className="container">
        {recipes.data.recipes.map((recipe) => 
          <RecipeItem key={recipe.id} recipe={recipe} />
        )}
      </div>
    </section>
  ) 
  } else if (!loading && random !== true && recipe.length !== 0) {



    return (

    <section className='boxes'>
      <div className="container">
        {recipe.map((item) => {
          return <RecipeItem key={item.data.id} recipe={item.data} />
        })}
      </div>
    </section>
    )
  } else {
    return <Spinner />
  }
}

export default RecipeResults
