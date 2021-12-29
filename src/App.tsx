import React from "react";
import Notes from "./pages/Notes";
import Shop from "./pages/Shop";

import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Notes />
      <hr />
      <Shop />
    </Provider>
  );
}

export default App;
