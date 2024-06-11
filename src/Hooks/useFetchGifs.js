import { useState, useEffect } from "react"
import { getGifs } from '../component/helpers/getGifs'

export const useFetchGifs = ( category ) => {

 const [images, setImages] = useState([]);
 const [ isLoading, setIsLoading ] = useState( true );

const getImages = async() => {
  const newImages = await getGifs(category)
  setImages(newImages)
  setIsLoading(false)
  
 }

//   //dos argumentos, una funcion en el cual tenemos lo que queremos ejecutar
  useEffect( () => { 
      getImages();
    // getImages(category)
    //       .then( newImages => setImages(newImages))
  }, [] // array de dependencias, si estan vacias solo se va a ejecutar la primera vez que se crea y contruye el componente
) 

  return {
    images,
    isLoading
       // images: images, 
        // isLoading: true
  }
}

