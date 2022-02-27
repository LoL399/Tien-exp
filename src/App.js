import logo from "./logo.svg";
import "./App.css";
import { ContentClass } from "./component/class";
import { ContentFucntion } from "./component/function";
import { useState } from "react";
function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button onClick={()=>setValue(1000)}>Update props</button>
      <ContentClass value={value}  name={"class"}></ContentClass>
      <ContentFucntion value={value} name={"function"}></ContentFucntion>
    </div>
  );
}

export default App;
