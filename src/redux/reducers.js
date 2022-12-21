import {
  GET_STOCKS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  CLEAR_STOCKS,
} from "./actions";

const initialState = {
  stocks: [],
  favorite: [],
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCKS:
      return { ...state, stocks: action.payload };

    case ADD_FAVORITE:
      return { ...state, favorite: [...state.favorite, action.payload] };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter(
          (item) => item.symbol !== action.payload
        ),
      };

    case CLEAR_STOCKS:
      return {
        ...state,
        stocks: [],
      };

    default:
      return state;
  }
};

export default stocksReducer;
