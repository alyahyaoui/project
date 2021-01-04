import {
  LOAD_PUB,
  REGISTER_PUB,
  FAIL_PUB,
  GET_ALL_PUB,
  GET_PUB,
  FILTER_PUB,
  DELETE_PUB,
  EDIT_PUB,
} from "../const/pub";

const initiState = {
  pubs: [],
  loadpub: false,
  errors: null,
  pub: {},
  searched: [],
  isUpdated: "",
};

export const pubReducer = (state = initiState, { type, payload }) => {
  switch (type) {
    case REGISTER_PUB:
      return { ...state, loadpub: false, pub: payload.pub };

    case LOAD_PUB:
      return { ...state, loadpub: true };

    case FAIL_PUB:
      return { ...state, loadpub: false, errors: payload };

    case GET_PUB:
      return { ...state, loadpub: false, pub: payload };

    case GET_ALL_PUB:
      return { ...state, loadpub: false, pubs: payload };

    case FILTER_PUB:
      return { ...state, loadpub: false, searched: payload };

    case DELETE_PUB:
      return { ...state, loadpub: false };
    case EDIT_PUB:
      return { ...state, loadpub: false, isUpdated: payload };

    default:
      return state;
  }
};
