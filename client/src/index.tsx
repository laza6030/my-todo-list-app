import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SnackbarProvider } from "notistack";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <SnackbarProvider maxSnack={1} autoHideDuration={1500}>
              <App />
            </SnackbarProvider>
          </BrowserRouter>
        </DndProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
