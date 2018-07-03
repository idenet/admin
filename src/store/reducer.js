import initState from './state'
import * as types from './action-types.js'

export function menu(state = initState.menu, action){
  switch (action.type) {
    case types.SET_MENU:    
     return [...action.payload]
    default:
      return state
  }
}