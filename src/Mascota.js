import React from 'react'
import { edadActual } from './utils/helpers'

export default function Mascota(props) {
    const { name, type, breed, birthYear, characteristics = {} } = props
    const { eyeColor, skinColor } = characteristics

    return React.createElement(
        'div',
        {},
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, type),
        React.createElement('h2', {}, breed),
        React.createElement('h2', {}, edadActual(birthYear)),
        React.createElement(
            'h1',
            {},
            eyeColor && skinColor && `Caracteristicas: ${eyeColor} ${skinColor}`
        )
    )
}
