const availableOnlyReducer = (state = true, action) => {
  if (action.type === 'TOGGLE'){
    if (state === false) {
      return true
    }
    else{
      return false
    }
  }

  return state
}

//action creators
export const toggleAvailableOnly = () => {
  return {
    type: 'TOGGLE'
  }
}

export default availableOnlyReducer