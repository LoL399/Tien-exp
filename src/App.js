import logo from "./logo.svg";
import "./App.css";
import { ContentClass } from "./component/class";
import { ContentFucntion } from "./component/function";
import { useState } from "react";
function App() {
  return (
    <div>

      {/* <ContentClass value={value}  name={"class"}></ContentClass> */}
      <ContentFucntion></ContentFucntion>
    </div>
  );
}

export default App;
