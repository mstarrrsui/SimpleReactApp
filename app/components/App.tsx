import * as React from "react";

import MyTasks from "./MyTasks";

export default class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div>
        <MyTasks />
      </div>
    );
  }
}
