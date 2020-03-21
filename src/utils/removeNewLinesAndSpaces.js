export const removeNewLinesAndSpaces = value => {
    return value.toString().replace(/(\t+|\s+|\r\n+|\n+|\r+)/gm, '')
}
