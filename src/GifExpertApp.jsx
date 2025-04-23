import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  //nos ayudará a manejar nuestras categorias 
  //inicializamos con un arreglo (One Punch)
  const [categories, setCategories] = useState([]);

  //podemos comunicar los componentes en este caso el componente GifExpertApp con AddCategory mediante la propiedad de tipo funcion (onNewCategory) la pasamos al componente hijo "AddCategory"
  //lo cual hara el cambio en el estado del componente GifExpertApp atraves de la propagacion del envio en el formulario en el componente hijo "AddCategory" 
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  const categoryByDefault = () => {
    setCategories([])
  }
  return (
    <>
      {/*titulo */}
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">GifExpertApp</h1>


      {/*Input lo manejamos como un componente independiente*/}

      <AddCategory
        // setCategories={ setCategories }
        //onNewCategory es solo una propiedad de mi componente propiedad de tipo funcion
        onNewCategory={(value) => onAddCategory(value)}
        onClearCategory={categoryByDefault}
      />

      {/*Listado de Gif */}
      {/*renderizamos los elementos de las categorias */}
      {/* <button onClick={addCategory}>Agregar</button> */}


      {/*creamos un componente GiGrid capaz de mostrar unicamente las categorias que van surgiendo */}
      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
      {/*Git Item */}

    </>
  )
}
