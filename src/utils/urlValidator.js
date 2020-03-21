import { url } from './regex'
import { removeNewLinesAndSpaces } from './removeNewLinesAndSpaces'

export const urlValidator = input => {

  return removeNewLinesAndSpaces(input).match(url) !== null
}
