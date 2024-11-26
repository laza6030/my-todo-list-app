import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { SnackbarProvider } from "notistack";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { StyledEngineProvider } from "@mui/material/styles";

import { ThemeProvider } from "../src/context/ThemeContext";

import { client } from "../src";

export const withContext = (Story) => (
  <ApolloProvider client={client}>
    <ThemeProvider>
      <StyledEngineProvider injectFirst>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            <SnackbarProvider>
              <Story />
            </SnackbarProvider>
          </BrowserRouter>
        </DndProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export const decorators = [withContext];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
