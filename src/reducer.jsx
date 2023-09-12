/* eslint-disable no-unused-vars */
export const initialState ={
 basket : [], 
};


function reducer(state,action){
  switch(action.type){
    case 'ADD_TO_BASKET':
      //Loginc for adding item to basket
      break;
    case 'REMOVE_FROM_BASKET':
      //Loginc for removing item to basket
      break;  
      default:
      return state;
  }

}
export default reducer;