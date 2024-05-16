import React from 'react'
import { Route, Routes } from 'react-router-dom'
import First from '../Components/First'
import About from '../Components/About'
import Content from '../Components/Content'
import CreateRecipe from '../Components/CreateRecipe'
import RecipesAllCard from '../Components/RecipesAllCard'
import Details from '../Components/Details'
import Update from '../Components/Update'

const RoutesComponents = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<First />} />
                <Route path='/CreateRecipe' element={<CreateRecipe />} />
                <Route path='/Recipe' element={<RecipesAllCard />} />
                <Route path='/Recipe/:id' element={<Details/>} />
                <Route path='/About' element={<About />} />
                <Route path="/Content" element={<Content />} />
                <Route path="/update-recipe/:id" element={<Update />} />
            </Routes>
        </>
    )
}

export default RoutesComponents