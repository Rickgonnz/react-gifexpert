// import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types'

// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

  //usamos un hook para almacenar nuestra funcion que hará la llamada fetch a nuestra api 
  // y con useEffect evitamos que se ejecute mas de una vez cuando se re-renderiza nuestro componente
  const { images, isLoading } = useFetchGifs(category);


  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && (<h2>Cargando...</h2>)
      }


      <div className="card-grid">
        {images.map((image) =>
          <GifItem
            key={image.id}
            {...image}
          />
        )
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}