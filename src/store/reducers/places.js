import {
  PLACE_ADDED,
  REMOVE_PLACES,
  SET_PLACES,
  START_ADD_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: [],
  placeAdded: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        ...state,
        places: action.places
      };

    case REMOVE_PLACES:
      return {
        ...state,
        placeAdded: false
      };
    case START_ADD_PLACE:
      return {
        ...state,
        placeAdded: false

      };
    case PLACE_ADDED:
      return {
        ...state,
        placeAdded: true
      };

    default:
      return state;
  }
};

export default reducer;
