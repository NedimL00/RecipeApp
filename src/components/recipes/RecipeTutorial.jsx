import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeContext from '../../context/recipe/RecipeContext';
import RecipeIngredients from './RecipeIngredients';
import RecipeSteps from './RecipeSteps';
import Spinner from '../layout/Spinner';

function RecipeTutorial() {

  const{ loading, recipeTutorial, fetchRecipeTutorial } = useContext(RecipeContext)
  const { recipeID } = useParams()

  useEffect(() => {
    if(recipeID) {
      fetchRecipeTutorial(recipeID);
    }
    else {
      return
    }
  }, [recipeID])

if(!loading && recipeTutorial !== undefined){
  return (
    <section>
      <div className='container tutorialContainer'>
        <div className="recipeTutorialHeader">
          <img className='recipeTutorialImg' src={recipeTutorial.image} />
          <h2 className='recipeTutorialTitle' >{recipeTutorial.title}</h2>
        </div>
        <h2 className='recipeContainerTitle'>To make this recipe you will need following: </h2>
        <div className="recipeContainer">

          <RecipeIngredients ingredients={recipeTutorial.extendedIngredients} />
          <RecipeSteps  recipeSteps={recipeTutorial.analyzedInstructions} />
        </div>
      </div>
    </section>
    
  )
} else {
  return (
    <Spinner />
  )
}
}

export default RecipeTutorial