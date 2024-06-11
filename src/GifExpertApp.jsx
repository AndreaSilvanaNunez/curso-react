import { useState } from "react"
import { AddCategory, GifGrid } from "./component";

export const  GifExpertApp = () => {

    const [categories, setCategories] = useState(['Sakura Card Captor']);

    const onAddCategories = ( newCategory ) =>{
        if (categories.includes(newCategory)) return;

            setCategories([newCategory, ...categories])
          
    }

  return (
    <>
        <h1>GifExpertApp</h1>
    <AddCategory onNewCategory ={ (value) => onAddCategories(value) }/>
         { categories.map( (category) => {
                return (

                    <GifGrid 
                        key = { category }
                        category = { category }/>
                 )
                

            })} 
       
    </>
   
  )
}
