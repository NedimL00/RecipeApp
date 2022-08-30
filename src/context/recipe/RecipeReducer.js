const recipeReducer = (state, action) => {
  switch(action.type) {
    case 'GET_RANDOM_RECIPES': 
      return {
        ...state,
        recipes: action.payload,
        loading: false,
        random: true,
      }
    case 'GET_RECIPES': 
      return {
        ...state,
        recipes: action.payload,
        recipe: [],
        loading: false,
        random: false,
      }
    case 'GET_RECIPE_INFO':
      return{
        ...state,
        recipe: [action.payload, ...state.recipe],
        random: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading:true,
      }
    default : 
      return state
  }
}

export default recipeReducer