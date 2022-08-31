import React from 'react';
import Spinner from '../layout/Spinner';

function RecipeSteps({ recipeSteps }) {

  console.log(recipeSteps);

 
    if(Array.isArray(recipeSteps) === true) {
      return (
        <ul className='stepsList'>
          {recipeSteps.map((arr) => {
            return(
              arr.steps.map((steps)=>{
                return <li>{steps.number}: {steps.step}</li>
              })
            )
            
          })}
        </ul>
      )
    } else {
      return <Spinner />
    }

}

export default RecipeSteps