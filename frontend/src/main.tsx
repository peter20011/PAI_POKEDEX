import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import AppRouter from "./routes";
import { ResetCss } from "./theme/globalStyles";
import { dark } from "./theme";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={dark()}>
        <ResetCss />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);


reportWebVitals();