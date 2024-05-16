import React from 'react'
import {  useNavigate } from 'react-router-dom';



const RecipesCard = (props) => {

  const { id, title, image, description, instructions, ingredients } =
    props.recipe;


  const navigate = useNavigate();


  const RecipesRout = (id) => {
    navigate(`/Recipe/${id}`)
  };



  return (
    <>
      <div key={id} className=' h-[100%] w-[20vw] border-2 border-gray-600 bg-white rounded-lg p-5 text-center'>
      <img className="w-full h-[200px] object-cover" src={image} alt={title} />
            <h1 className="mt-5 mb-3 text-xl text-semibold">{title}</h1>
            <p>{description.slice(0, 100)}...</p>
            <div className="flex justify-between text-zinc-400 mt-5 ">
                <p className="text-center ">
                    <i className="ri-timer-line"></i>
                    <br />
                    <span className="text-sm">20min</span>
                </p>
                <p className="text-center">
                    <i className="ri-thumb-up-line"></i>
                    <br />
                    <span className="text-sm">Easy</span>
                </p>
                <p className="text-center">
                    <i className="ri-share-line"></i>
                    <br />
                    <span className="text-sm">Share</span>
                </p>
            </div>
        <button className=' bg-orange-500 px-5 py-2 rounded mt-3 font-semibold text-white' onClick={() => RecipesRout(id)}>See Recipes</button>
      </div>
    </>
  )
}

export default RecipesCard