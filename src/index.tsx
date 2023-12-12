import React from "react";
import ReactDOM from "react-dom/client";
import App from "app";
import store from "shared/api/store";
import { Provider } from "react-redux";
import "./index.css";
import "./tailwind.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
