import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory, onClearCategory }) => {

    const [inputValue, setInputValue] = useState('');

    //desestructuramos el target
    const onInputChange = ({ target }) => {
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

    const clear = () => {
        onClearCategory()
    }
    {/* esos atributos html en este ambiente son conocidos como propertys */ }
    return (
        <form onSubmit={onSubmit} aria-label="form" className="space-y-4">
            <div className="flex items-center gap-4 w-full max-w-md mx-auto mt-6">
                <input
                    type="text"
                    placeholder="Buscar gif"
                    value={inputValue}
                    onChange={onInputChange}
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <button
                    type="button"
                    onClick={clear}
                    className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 active:bg-red-700 transition"
                >
                    Limpiar
                </button>
            </div>

        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
    onClearCategory: PropTypes.func.isRequired
}