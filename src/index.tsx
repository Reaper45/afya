import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { theme } from "theme";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom"
import { ThemeProvider } from "emotion-theming";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
