import * as React from "react";

import SearchInput from "./SearchInput";

//import "devextreme/dist/css/dx.common.css";
//import "devextreme/dist/css/dx.light.css";

export default class App extends React.Component {
  sayHelloWorld(): void {
    alert("Hello world!");
  }

  public render(): React.ReactNode {
    return (
      <div>
        <h2>Hello, from my simple React App</h2>
        <SearchInput />
      </div>
    );
  }
}
