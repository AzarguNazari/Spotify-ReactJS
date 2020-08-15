import React from "react";
import "./style.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import MusicTracker from "./components/MusicTracker";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <MusicTracker />
    </div>
  );
}
