import { useReducer } from 'react'

import mockData  from './data.json'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_GAME':
      return [
        ...state,
        action.payload,
      ]
    default:
      return state
  }
}

const games = () => useReducer(reducer, mockData)

export default games