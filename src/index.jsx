import "bulma/css/bulma.css";
import "./styles.css";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/index";
const el = document.querySelector("#root");
const root = createRoot(el);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
