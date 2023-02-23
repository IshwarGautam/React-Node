import React from "react";
import http from "./http";

const App = () => {
  http.get("/");

  return <div className="App">Hello</div>;
};

export default App;
