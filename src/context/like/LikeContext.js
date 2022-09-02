import { createContext, useEffect, useReducer, useState } from "react";
import likeReducer from "./LikeReducer";

const LikeContext = createContext();

export const LikeProvider = ({children}) => {

  const initialState = {
    likedRecipes: [],
    loaded: true,
  }

  const [active, setActive] = useState(false);
  const [style, setStyle] = useState('hideLikedItems');
  const [state, dispatch] = useReducer(likeReducer, initialState);


// show liked items window


const addLiked = (id, item) => {
  localStorage.setItem(id, JSON.stringify(item));
  localStorage.setItem(`added_${id}`, 'true');
}

const removeLiked = (id) => {
  localStorage.removeItem(id);
  localStorage.setItem(`added_${id}`, 'false')
  const newData = state.likedRecipes.filter((item) => item.id !== id)

  dispatch({
    type: 'REMOVE_LIKE_RECIPE',
    payload: newData,
  })
}

//render liked items

useEffect(() => {   
  function renderLikedItems() {
    let values = [],
    data = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  
    while ( i-- ) {
      const toNum = parseInt(keys[i]);
      if(!isNaN(toNum)) {
        values.push( localStorage.getItem(keys[i]) );
      }
    }

    data = values.map((item)=>{
      return JSON.parse(item);
    });

    dispatch({
      type: 'LIKE_RECIPE',
      payload: data,
    })
  }
  renderLikedItems();

  function showLikes() {
    if (active) {
      document.body.classList.add('bodyOverflow');
      setStyle('showLikedItems')
    } else {
      document.body.classList.remove('bodyOverflow');
      setStyle('hideLikedItems');
    }
  }
  showLikes();


}, [active])


return(
  <LikeContext.Provider value={{
    active: active,
    style: style,
    likedRecipes: state.likedRecipes,
    loaded: state.loaded,
    setActive,
    addLiked,
    removeLiked,
  }}>
    {children}
  </LikeContext.Provider>
)
}

export default LikeContext