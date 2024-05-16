import React, { useContext } from 'react'
import RecipesCard from './RecipesCard'
import { NavLink } from 'react-router-dom'
import { Recipescontext } from '../Contexts/RecipesContext'
import RecipesAllCard from './RecipesAllCard'

const First = () => {
    const [recipes, setrecipes] = useContext(Recipescontext)

    return (
        <>
            <div className='flex justify-between mx-16 mb-7'>
                <div className='px-10 m-10 '>
                    <div className=' flex flex-col gap-1 text-5xl font-bold'>
                        <h1>Cook LIke a Pro with</h1>
                        <h1>Our <span className='text-orange-500'>Easy</span> and <span className='text-orange-500'>Tasty</span>  </h1>
                        <h1>Recipes</h1>
                    </div>
                    <p className='my-5 font-semibold '>
                        From quick and easy meals to gourmet delights, we have <br /> something for every taste and occasion.
                    </p>
                    <NavLink to="/Recipe" className='bg-orange-500 px-5 py-2 rounded shadow-[3px_5px_3px_rgba(0,0,0,0.5)]' >Explore all Recipes</NavLink>
                    <br />
                    <br />
                    <NavLink to="/CreateRecipe" className="">click here to <span className='text-orange-500  font-bold'>Create Recipe!</span></NavLink>

                </div>
                <img className=' h-[65vh] ' src="chef.png" alt="" />
            </div>
            {/* <h3 className= 'text-center mt-4'>see more</h3> */}
                <RecipesAllCard/>
           
        </>

    )
}

export default First