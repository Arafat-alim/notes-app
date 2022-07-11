import React from "react";
import Split from "react-split";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Split>
        <Sidebar />
        <Editor />
      </Split>
    </div>
  );
}

export default App;
