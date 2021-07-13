import React from "react";
import ReactDOM from "react-dom";
import { Server } from "miragejs";
import { App } from "./App";
import { GlobalStyle } from "./styles/global";

new Server({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Desenvolvimento de Website",
          amount: 400,
          type: "income",
          category: "Trabalho",
        },
        {
          id: 2,
          title: "Desenvolvimento de Website",
          amount: 500,
          type: "income",
          category: "Trabalho",
        },
        {
          id: 3,
          title: "Desenvolvimento de Website",
          amount: 600,
          type: "income",
          category: "Trabalho",
        },
        {
          id: 4,
          title: "Desenvolvimento de Website",
          amount: 700,
          type: "income",
          category: "Trabalho",
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
