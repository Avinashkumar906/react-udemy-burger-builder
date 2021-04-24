const USER = {
  name:null,
  email:null
}

const reducer = (state = USER, action)=>{
  switch (action.type) {
    case 'ADD_USER':{
      return action.payload;
    }
    case 'REMOVE_USER':{
      return null;
    }
    default:
      return state;
  }
}

export default reducer;