import React from "react";
import Notes from "./pages/Notes";

import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Notes />
    </Provider>
  );
}

export default App;
