const likeReducer = (state, action) => {
  switch(action.type) {
    case 'LIKE_RECIPE': 
      return {
        ...state,
        likedRecipes: action.payload,
        loaded: false,
      }
    case 'REMOVE_LIKE_RECIPE':
      return {
        ...state,
        likedRecipes: action.payload,
        loaded: false,
      }
    default : 
      return state
  }
}

export default likeReducer