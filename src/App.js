import React from 'react'
import Mascota from './Mascota'

//Codigo React

const App = () => {
    /*    return React.createElement(
        'div',
        {
            id: 'super-id-element',
        },
        React.createElement('h1', {}, 'Mascotas'),
        React.createElement(Mascota, {
            name: 'Yisus',
            type: 'Perra',
            breed: 'Chihuahua',
            birthYear: 1990,
        }),
        React.createElement(Mascota, {
            name: 'Juan',
            type: 'Perro',
            breed: 'Boxer',
            birthYear: 1910,
        }),
        React.createElement(Mascota, {
            name: 'Luis',
            type: 'Burro',
            breed: 'Hablador',
            birthYear: 1980,
            characteristics: {
                eyeColor: 'blue',
                skinColor: 'Black',
            },
            })
    )*/
    return (
        <div id="super-id-element">
            <h1>Mascotas</h1>
            <Mascota
                name="Yisus"
                type="Perra"
                breed="Chihuahua"
                birthYear="1996"
            ></Mascota>
            <Mascota
                name="Luis"
                type="Burra"
                breed="Corrientona"
                birthYear="1995"
            ></Mascota>
            <Mascota
                name="Juan"
                type="Poderoso"
                breed="Boxer"
                birthYear="1991"
            ></Mascota>
        </div>
    )
}

export default App
