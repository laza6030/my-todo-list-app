import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { SnackbarProvider } from "notistack";
import { StyledEngineProvider } from "@mui/material/styles";

import { ThemeProvider } from "../src/context/ThemeContext";

import { client } from "../src";

export const withContext = (Story) => (
  <ApolloProvider client={client}>
    <ThemeProvider>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <SnackbarProvider>
            <Story />
          </SnackbarProvider>
        </BrowserRouter>
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
