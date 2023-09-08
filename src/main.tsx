import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { Provider } from "react-redux";
// import { postApi } from "./redux/api.ts";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ApiProvider api={postApi}>
      <App />
    </ApiProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
