import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'One Punch';


    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        //asi debería de estar el loading en el punto inicial, cuando la aplicación parte 
        render(<GifGrid category={category}></GifGrid>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]


        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category}></GifGrid>);

        //screen.debug nos ayuda a saber como lucd nuestro sujeto de pruebas
        // screen.debug();

        //con el screen.getAllByRole (ya que estamos esperando mas de uno)
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});