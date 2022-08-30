import React from 'react';
import RecipeResults from '../components/recipes/RecipeResults';
import RecipeSearch from '../components/recipes/RecipeSearch';
import Alert from '../components/layout/Alert'

function Home() {
  return (
    <>
      <RecipeSearch/>
      <Alert />
      <RecipeResults />
    </>
    )
}

export default Home