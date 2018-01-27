import React from "react";
import { render } from "react-dom";
import {   Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import * as mobx from 'mobx';
import { Provider } from "mobx-react";
// Service Worker for PWA
import serviceWorkerRegister from "./registerServiceWorker";
// Import our Stores Here
import UserStore from "./store/user";
// Import Components
import App from "./App";

// Execute the ServiceWorker
serviceWorkerRegister();

// Enable MobX Strict Functionality
mobx.useStrict(true);

// Create React Router Browser History
const history = createBrowserHistory();

// Because they're classes, we have to instantiate them here :)
const userStore = UserStore.create({
  id: "1",
  username: "Alex",
});
// const languageStore = LanguageStore.create({ language: "en" });
// const uiStore = UIStore.create({ borderRadius: 3, textColor: "white" });

const store = {
  user: userStore,
};

const router = (
  <Provider {...store}>
    <Router history={history}>
      <Route exact path="/" component={App} />
    </Router>
  </Provider>
);
render(router, document.getElementById("root"));
