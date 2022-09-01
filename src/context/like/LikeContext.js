import { createContext, useEffect, useState } from "react";

const LikeContext = createContext();

export const LikeProvider = ({children}) => {

  const [active, setActive] = useState(false);
  const [style, setStyle] = useState('hideLikedItems')

useEffect(()=> {
  function showLikes() {
    if (active) {
      setStyle('showLikedItems')
    } else {
      setStyle('hideLikedItems');
    }
  }
  showLikes();
},[active])


return(
  <LikeContext.Provider value={{
    active: active,
    style: style,
    setActive
  }}>
    {children}
  </LikeContext.Provider>
)
}

export default LikeContext