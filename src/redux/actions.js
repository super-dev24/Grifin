import { ALPHA_VANTAGE_API_KEY } from "@env";
export const GET_STOCKS = "GET_STOCK";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const CLEAR_STOCKS = "CLEAR_STOCKS";

export const get_stocks = (stock) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stock}&apikey=${ALPHA_VANTAGE_API_KEY}`
      );
      const { bestMatches } = await response.json();
      dispatch({
        type: GET_STOCKS,
        payload: bestMatches,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const clear_stocks = () => ({
  type: CLEAR_STOCKS,
});

export const add_favorite = (name, symbol) => ({
  type: ADD_FAVORITE,
  payload: {
    name,
    symbol,
  },
});

export const remove_favorite = (symbol) => ({
  type: REMOVE_FAVORITE,
  payload: symbol,
});
