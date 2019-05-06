import React from "react";
import List from "./List";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "./store/store";

const App: React.FC = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <div className="App">
        <List />
      </div>
    </Provider>
  );
};

export default App;
