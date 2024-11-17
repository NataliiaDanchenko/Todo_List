// react
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// app
import App from "./app/App.tsx";

// styles
import "./index.scss";
import { StoreProvider } from "./app/providers/store/StoreProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
