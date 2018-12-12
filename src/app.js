import React from "react";
import ReactDOM from "react-dom";

import style from "./app.css";

function HelloWorld() {
    return <div>Hello, Toes!</div>;
}

ReactDOM.render(<HelloWorld />, document.querySelector("main"));
