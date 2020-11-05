import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          <li key="relativeListItem1">Grandfather</li>
          <li key="relativeListItem2">Uncle</li>
        </ol>
      </div>
    );
  }
}

export default App;
