import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  data: [],
  error: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FetchData":
      return { ...state, data: action.data };
    case "ERROR":
      return { ...state, error: action.msg };
    default:
      return state;
  }
}

export const actionCreators = {
  setPokemons: payload => ({ type: "SET_POKEMONS", payload }),
  fetchPokemons: () => {
    return dispatch => {
      return fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
        .then(response => response.json())
        .then(json => dispatch({ type: "FetchData", data: json.results }))
        .catch(err => dispatch({ type: "ERROR", msg: "Unable to fetch data" }));
    };
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

window.store = store;

export default store;
