import { createContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import recipeReducer from "./RecipeReducer";

const RecipeContext = createContext();

const token = "51c3eb3709af4c20991384bb9e98c2fd";
const token2 = "5c5c18327a5d46c8a09337bfe2ee3b8e";
const token3 = "48db2445e9164d0ba96dbaa5005e12f6";

export const RecipeProvider = ({children}) => {

  const initialState = {
    recipes: {},
    recipe: [],
    recipeTutorial: {},
    loading: false,
    tutorialLoading: false,
    random: true
  }

  const [state, dispatch] = useReducer(recipeReducer, initialState);
  const [text, setText] = useState('');


  useEffect (() => {
    async function fetchData(value) {

      if( text !== '') {
        setLoading();
        const data = await axios.get(`https://api.spoonacular.com/recipes/autocomplete?query=${value}`,{
        params: {
          apiKey: token3,
          ingredients: value,
          number: 3,
        }
      }).then(data => {
        data.data.map(async recipe => {
          const fullInfo = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information`, {
            params: {
              apiKey: token3,
            }
          })

          dispatch({
            type: 'GET_RECIPE_INFO',
            payload: fullInfo,
          })

        })
      })
  
        dispatch({
          type: 'GET_RECIPES',
          payload: data,
        })
        
  
      } else {

        setLoading();
        const data = await axios.get(`https://api.spoonacular.com/recipes/random`,{
        params: {
          apiKey: token3,
          number: 3,
        }
        })
  
        dispatch({
          type: 'GET_RANDOM_RECIPES',
          payload: data,
        })
  
      }
    }
    fetchData(text);
  },[text])


  const setLoading = () => {
    dispatch({
      type:'SET_LOADING',
    })
  }

  const setTutorialLoading = () => {
    dispatch({
      type:'SET_TUTORIAL_LOADING',
    })
  }

  const fetchRecipeTutorial = async (num) => {
    setTutorialLoading();
    const data = await axios.get(`https://api.spoonacular.com/recipes/${num}/information`, {
      params : {
        apiKey: token3,
      }
    })

    dispatch({
      type: 'GET_RECIPE_TUTORIAL',
      payload: data,
    })
  }




return (
  <RecipeContext.Provider value= {{
    recipes:state.recipes,
    recipe: state.recipe,
    recipeTutorial: state.recipeTutorial,
    loading:state.loading,
    random:state.random,
    setText,
    fetchRecipeTutorial,
  }}>
    {children}
  </RecipeContext.Provider>
)
}

export default RecipeContext

