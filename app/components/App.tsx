import * as React from "react";

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <h2>Hello, from my simple React App</h2>
        <div className="mainimgcontainer">
          <div className="mainimg" />
        </div>
      </div>
    );
  }
}
