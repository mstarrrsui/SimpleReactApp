import * as React from "react";

import Boxes from "./Boxes";
import Button from "devextreme-react/button";
import SearchInput from "./SearchInput";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

export default class App extends React.Component {
  sayHelloWorld(): void {
    alert("Hello world!");
  }

  public render(): React.ReactNode {
    return (
      <div>
        <h2>Hello, from my simple React App</h2>
        <SearchInput />
        <Button text="Click me" onClick={this.sayHelloWorld} />
        <div className="mainimgcontainer">
          <div className="mainimg" />
        </div>
        <Boxes />
      </div>
    );
  }
}
