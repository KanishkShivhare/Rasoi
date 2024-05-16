import React, { useContext, useState } from 'react'
import { Recipescontext } from '../Contexts/RecipesContext'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const CreateRecipe = () => {
    const [recipes, setrecipes] = useContext(Recipescontext)

    const [image, setimage] = useState("")
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [ingredients, setingredients] = useState("")
    const [instructions, setinstructions] = useState("")

    const navigate = useNavigate()

    const SubmitHandler = (e) => {
        e.preventDefault();
        const newRecipe = {
            id: nanoid(),
            image,
            title,
            description,
            ingredients,
            instructions
        }
        setrecipes([...recipes, newRecipe]);
        // setrecipes([newRecipe]);
        
        // sets the data in the localStorge of the browser
        localStorage.setItem(
            "recipes",
            JSON.stringify([...recipes, newRecipe])
        );
        toast.success("Recipe Created Successfully!");
        navigate("/")
    }

    return (
        <>
            <div className='mx-16 my-5'>
                <div className='text-7xl font-extrabold text-white  custom-stroke my-10'>
                    <h1 className='hover:text-orange-500'>Create</h1>
                    <h1 className='hover:text-orange-500'>New Recipe </h1>
                </div>
                <form action="" onSubmit={SubmitHandler}>
                    <input
                        onChange={(e) => setimage(e.target.value)}
                        value={image}
                        type="url"
                        placeholder='Recipe Image URL'
                        className="w-full border rounded-md px-6 py-3 text-lg mb-5 border-orange-200"
                    />
                    <input
                        onChange={(e) => settitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder='Recipe Name'
                        className="w-full border rounded-md px-6 py-3 text-lg mb-5 border-orange-200"
                    />
                    <input
                        onChange={(e) => setdescription(e.target.value)}
                        value={description}
                        type="text"
                        placeholder='recipe description'
                        className="w-full border rounded-md px-6 py-3 text-lg mb-5 border-orange-200"
                    />
                    <input
                        onChange={(e) => setingredients(e.target.value)}
                        value={ingredients}
                        type="text"
                        placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
                        className="w-full border rounded-md px-6 py-3 text-lg mb-5 border-orange-200"
                    />
                    <input
                        onChange={(e) => setinstructions(e.target.value)}
                        value={instructions}
                        type="text"
                        placeholder="recipe instructions -> 'use comma to sete instructions'..."
                        className="w-full border rounded-md px-6 py-3 text-lg mb-5 border-orange-200"
                    />
                    <div className="w-full text-right">
                        <button className="rounded-md text-xl bg-orange-500 text-white py-2 px-5 hover:bg-orange-600 duration-200">
                            Publish Recipe &nbsp; &#8594;
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateRecipe