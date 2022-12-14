import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
} from "@apollo/client";
import { SnackbarProvider } from "notistack";

import { UserProvider } from "./context/UserContext";
import { ModeProvider } from "./context/ModeContext";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

import { theme } from "./theme";

const httpLink = new HttpLink({ uri: "http://localhost:4000/graphql" });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");

  operation.setContext({
    headers: {
      authorization: token,
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <ModeProvider>
          <StyledEngineProvider injectFirst>
            <DndProvider backend={HTML5Backend}>
              <BrowserRouter>
                <SnackbarProvider maxSnack={1} autoHideDuration={1500}>
                  <UserProvider>
                    <App />
                  </UserProvider>
                </SnackbarProvider>
              </BrowserRouter>
            </DndProvider>
          </StyledEngineProvider>
        </ModeProvider>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
