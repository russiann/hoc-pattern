import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import PokemonsPage from "./PokemonsPage";

const App = () => (
  <Provider store={store}>
    <PokemonsPage />
  </Provider>
);
export default App;
