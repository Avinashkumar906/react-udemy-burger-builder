const INGREDIENTS_STATE = {
  ingredients: {
    salad: 1,
    cheese: 0,
    meat: 1,
  }
}

const reducer = (state = INGREDIENTS_STATE, action)=>{
  switch (action.type) {
    case 'ADD_ITEM':{
      const ingredients = {...state.ingredients}
      ingredients[action.payload] += 1;
      return {...state, ingredients:ingredients}; 
    }
    case 'LESS_ITEM':{
      const ingredients = {...state.ingredients}
      ingredients[action.payload] -= 1;
      return {...state, ingredients:ingredients};
    }
    case 'RESET':{
      return {...state, ...INGREDIENTS_STATE};
    }
    default:
      break;
  }
  return state;
}

export default reducer;