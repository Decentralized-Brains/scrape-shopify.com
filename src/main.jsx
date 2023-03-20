import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GoToTop from "./components/GoToTop";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className=" fixed right-[1%] top-[90%] rotate-[270] z-50">
      <GoToTop />
    </div>
    <App />
  </React.StrictMode>
);
