import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

        //desestructuramos el target
        const onInputChange = ({target}) =>{
            setInputValue(target.value);
        }
        const onSubmit = (event) => {
            event.preventDefault();            
            // console.log({setCategories});
            if (inputValue.trim().length <= 1) return;
            onNewCategory(inputValue.trim());
            setInputValue('');
                // setCategories(categories => [...categories, inputValue]);
                // setInputValue('');
        }
    {/* esos atributos html en este ambiente son conocidos como propertys */}
  return (    
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="buscar gif"
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>
  )
}
