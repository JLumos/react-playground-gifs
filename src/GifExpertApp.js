import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {

    // const categories = ['Kingdom Hearts', 'Digimon', 'Shineki'];
    const [categories, setCategories] = useState(['Digimon'])

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Pokemon']);
    //     setCategories( categories => [...categories, 'Pokemon']);
    // }

    return (
        <>
            <h2> Gif Expert App</h2>

            <AddCategory setCategories={setCategories} />

            <hr />


            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
