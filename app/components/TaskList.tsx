import * as React from "react";
import Tasks from "./Tasks";

interface State {
  stack: string;
}

const initialState: State = {
  stack: "Renewals"
};

export default class TaskList extends React.Component<{}, State> {
  public state: State = initialState;

  constructor(props: {}) {
    super(props);
    this.handleStackSelect = this.handleStackSelect.bind(this);
  }

  public handleStackSelect(event: React.ChangeEvent<HTMLSelectElement>): void {
    const { target } = event;
    this.setState(() => ({ stack: target.value }));
  }

  public render(): React.ReactNode {
    return (
      <div>
        <h2>Tasks</h2>
        <div>
          Stack:
          <select
            id="stack"
            onChange={this.handleStackSelect}
            value={this.state.stack}
          >
            <option value="New Bus./ Sub">New Bus./ Sub</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Binder/Issue">Binder/Issue</option>
            <option value="Renewals">Renewals</option>
            <option value="Endorsements">Endorsements</option>
          </select>
        </div>
        <Tasks stack={this.state.stack} />
      </div>
    );
  }
}
