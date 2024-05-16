import React, { useContext } from 'react'
import { Recipescontext } from '../Contexts/RecipesContext'
import RecipesCard from './RecipesCard'
import { NavLink } from 'react-router-dom'


const RecipesAllCard = () => {
    const [recipes, setrecipes] = useContext(Recipescontext)
    // console.log(recipes);
    return (
        <>
            <div className=' bg-orange-100 p-10'>
                <NavLink to="/CreateRecipe" className="bg-orange-500 px-5 py-2 rounded text-white  font-bold">Create Recipe! <i className="ri-add-box-line text-xl font-thin"></i></NavLink>
                <div className='flex flex-wrap gap-3 justify-evenly mt-5'>
                    {recipes.map((recipe) => <RecipesCard key={recipe.id} recipe={recipe} />)}
                </div>
            </div>
        </>
    )
}

export default RecipesAllCard