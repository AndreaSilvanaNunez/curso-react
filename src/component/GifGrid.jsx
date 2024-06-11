import { GifItem } from './GifItem';
import { useFetchGifs } from '../Hooks/useFetchGifs';



export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category )


  return (
    <>
        <h3>{ category }</h3> 
        {
          isLoading && (<h4>cargando...</h4>)
        }

        
        <div className="card-grid">
          {
            images.map(( images ) => (
              <GifItem
                  key={ images.id }
                  {...images}
              />
            ))

          }       
        </div> 
    </>
  )
}

