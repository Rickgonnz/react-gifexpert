import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //nos ayudará a manejar nuestras categorias 
  //inicializamos con un arreglo (One Punch)
const [categories, setCategories] = useState(['One Punch']);

const onAddCategory = (newCategory) =>{
  if(categories.includes(newCategory)) return;
  setCategories([newCategory, ...categories]);
}

  return (
    <>
        {/*titulo */}
        <h1>GifExpertApp</h1>

        {/*Input */}

        <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
        />

        {/*Listado de Gif */}
        {/*renderizamos los elementos de las categorias */}
        {/* <button onClick={addCategory}>Agregar</button> */}

          { 
            categories.map( ( category ) => (
              <GifGrid key={category} category={category}/>
            ))
          }
            {/*Git Item */}

    </>
  )
}
