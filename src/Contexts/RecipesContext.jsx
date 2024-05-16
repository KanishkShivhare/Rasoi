import React, { createContext, useEffect, useState } from 'react'

export const Recipescontext = createContext(null)


const RecipesContext = ({children}) => {
  const [recipes, setrecipes] = useState([]);

  useEffect(() => {
    setrecipes(JSON.parse(localStorage.getItem("recipes")) || []);
}, []);
    
  return (
    <Recipescontext.Provider value={[recipes, setrecipes]}>
        {children}
    </Recipescontext.Provider>
  )
}

export default RecipesContext