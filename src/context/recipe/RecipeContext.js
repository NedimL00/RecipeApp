import { createContext, useEffect, useReducer, useState } from "react";
import axios from 'axios';
import recipeReducer from "./RecipeReducer";

const RecipeContext = createContext();

const token = "51c3eb3709af4c20991384bb9e98c2fd";
const token2 = "5c5c18327a5d46c8a09337bfe2ee3b8e";

export const RecipeProvider = ({children}) => {

  const initialState = {
    recipes: {},
    recipe: [],
    loading: false,
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
          apiKey: token2,
          ingredients: value,
          number: 3,
        }
      }).then(data => {
        data.data.map(async recipe => {
          const fullInfo = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information`, {
            params: {
              apiKey: token2,
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
          apiKey: token2,
          number: 3,
        }
        })
  
        dispatch({
          type: 'GET_RANDOM_RECIPES',
          payload: data,
        })
        console.log(state.recipes)
  
      }
    }
    fetchData(text);
  },[text])


  const setLoading = () => {
    dispatch({
      type:'SET_LOADING',
    })
  }


return (
  <RecipeContext.Provider value= {{
    recipes:state.recipes,
    recipe: state.recipe,
    loading:state.loading,
    random:state.random,
    setText,
  }}>
    {children}
  </RecipeContext.Provider>
)
}

export default RecipeContext

/* const [posts, setPosts] = useState([]);
const [postsExternal, setPostsExternal] = useState([]); */

/* 
useEffect(() => {
  // not adding .catch() here for simplicity 😎

  axios.get(`http://localhost:2000/posts`).then(({ data }) => {
    // we're putting this here because we only want to set state once (we don't wanna have to rerender 30times in data.map())
    let externalPosts = [];
    // destructed out the {data}, same as response.data, so no worries 👍
    setPosts(data);
    console.log(data);
    // this is where you'll make your second API calls using the external_id from first call
    data.map(({ external_id }) => {
      // {external_id} same as your-param-name.external_id
      axios
        .get(`http://localhost:2000/posts/${external_id}`)
        .then(({ data }) => {
          // we push the data into the array 📃
          console.log(data);
          externalPosts.push(data);
        });

      // then finally set the external post states once to prevent multiple rerendring in .map() 💯
      setPostsExternal(externalPosts);
      // that's it 😎
    });
  });

  // tho, i'd recommend you create a seperate function for the above 👆
}, []); */