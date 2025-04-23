import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../../src/GifExpertApp';



describe('Pruebas en <GifExpertApp />', () => {

    test('debe mostrar la categoría inicial', () => {
        render(<GifExpertApp></GifExpertApp>);
        screen.debug();
        expect(screen.getByText('One Punch')).toBeTruthy(); // Verifica que la categoría inicial se muestra
    });

    test('debe agregar una nueva categoría cuando se llama a onAddCategory', () => {
        render(<GifExpertApp></GifExpertApp>);

        // Suponemos que hay un input y un botón en el componente para agregar categorías.
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Simulamos ingresar una nueva categoría y enviar el formulario
        fireEvent.input(input, { target: { value: 'Naruto' } });
        fireEvent.submit(form);

        // Verificamos que la nueva categoría fue añadida
        expect(screen.getByText('Naruto')).toBeTruthy();
    });

    test('no debe agregar una categoría existente', () => {
        render(<GifExpertApp></GifExpertApp>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // Intentamos agregar una categoría que ya existe
        fireEvent.input(input, { target: { value: 'One Punch' } });
        fireEvent.submit(form);

        // Verificamos que no se haya añadido de nuevo
        const categories = screen.getAllByText('One Punch');
        expect(categories.length).toBe(1);
    });
});