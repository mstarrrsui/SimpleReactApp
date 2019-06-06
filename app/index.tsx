import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

import "./index.css";

ReactDOM.render(<App />, document.getElementById("app"));

if ((module as any).hot) {
  (module as any).hot.accept();
}
