import React from "react";
import "./style.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import CurrentTracker from "./components/CurrentTracker";

export default function App() {
  return (
    <div classNameName="App">
      <Header />
      <Content />
      <CurrentTracker />
    </div>
  );
}
