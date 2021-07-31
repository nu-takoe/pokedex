export function getFormatedName(name) {
    let firsLetter = name.charAt(0)
    let restLetters = name.slice(1)
    let formatedName = firsLetter.toUpperCase() + restLetters

    return formatedName
}

export function getTypes(pokemon) {
    let types = []

    for (let key in Object.keys(pokemon.types)) {
        types.push(getFormatedName(pokemon.types[key].type.name))
    }

    return types.join(' ')
}

export function getTotal(pokemon) {
    let total = Number(0)
    for (let key in Object.keys(pokemon.stats)) {
        total += Number(pokemon.stats[key].base_stat)
    }
    return total
}