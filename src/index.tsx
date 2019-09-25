
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import {AuthProvider} from './contexts/auth';

ReactDOM.render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  document.getElementById("root")
);
