import {
    LOAD_PUB,
    REGISTER_PUB,
    FAIL_PUB,
    ALL_PUB,

  } from "../const/pub";
  
  const initiState = {
    pub: null,
    loadpub: false,
    errors: null,
  
  };
  
  export const pubReducer = (state = initiState, { type, payload }) => {
    switch (type) {
      case REGISTER_PUB:
        
        return { ...state, loadpub: false, pub: payload.pub };
      
      case LOAD_PUB:
        return { ...state, loadpub: true };
     
      case FAIL_PUB:
        return { ...state, loadUser: false, errors: payload };

        case ALL_PUB:
      return { ...state, loadUser: false, pub: payload };

      default:
        return state;
    }
  };