import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }}></AddCategory>);

        //extraemos el input que tiene una relacion directa con el getByRole
        const input = screen.getByRole('textbox');

        //disparamos el evento usando fieEvent
        fireEvent.input(input, { target: { value: 'Saitama' } });

        //hacemos la asercion de lo que estamos esperando del evento 
        expect(input.value).toBe('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';

        //mandamos la funcion al componente AddCategory
        const onNewCategory = jest.fn();


        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');

        //esperamos que se haya invocado la funcion
        expect(onNewCategory).toHaveBeenCalled();

        //esperamos que se haya llamado solo una vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);

        //que haya sido llamado con el valor
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('no debe de llamar el onNewCategory si el input está vacio', () => {
        //mandamos la funcion al componente AddCategory
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });

});