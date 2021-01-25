import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-main">
        <div className="container-A">
          <div className="text itemA">Item A</div>
          <div className="text itemB">Item B</div>
          <div className="text itemC">Item C</div>
          <div className="text itemD">Item D</div>
          <div className="text itemE">Item E</div>
          <div className="text itemF">Item F</div>
        </div>
        <div className="container-B">
          <div className="photo photoA">Photo A</div>
          <div className="photo photoB">Photo B</div>
        </div>
      </div>
    </div>
  );
}
