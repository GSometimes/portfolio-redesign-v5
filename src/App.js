import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routerProps) => <Navbar {...routerProps} />}
      />
      <Route
        path="/projects"
        render={(routerProps) => <Navbar {...routerProps} />}
      />
      <Route
        path="/about"
        render={(routerProps) => <Navbar {...routerProps} />}
      />
      <Route
        path="/contact"
        render={(routerProps) => <Navbar {...routerProps} />}
      />
      <Route
        path="/extra"
        render={(routerProps) => <Navbar {...routerProps} />}
      />
    </Switch>
  );
}
