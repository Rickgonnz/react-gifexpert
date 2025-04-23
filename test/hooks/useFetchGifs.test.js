import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de regresar el estado inicial', () => {

        //los hooks necesitan parte del ciclo de vida de los componentes de react, es decir no los podemos evaluar de manera aislada, para eso tenemos la funcion renderHook(antes se ocupaba un paquete de terceros pero ahora se manda a llamar de testing-library)
        const { result } = renderHook(() => useFetchGifs('One Punch'));

        //nos sirve para obtener el valor actual de como esta renderizado nuestro hook
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {

        const { result } = renderHook(() => useFetchGifs('One Punch'));
        //Importamos una funcion del testing-library llamado waitFor que es una promesa en donde podemos usar un await (espera Por) usamos un callback
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
