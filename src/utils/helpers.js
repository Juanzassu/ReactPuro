export function edadActual(fechaIni) {
    const year = new Date().getFullYear()
    var edad = year - fechaIni
    return edad
}

