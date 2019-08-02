import * as React from "react";

interface Props {
  onStackChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  stack: string;
}

const StackSelector: React.SFC<Props> = ({ onStackChange, stack }) => {
  return (
    <div>
      Stack:
      <select id="stack" onChange={onStackChange} value={stack}>
        <option value="All Stacks">All Stacks</option>
        <option value="New Bus./ Sub">New Bus./ Sub</option>
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="Binder/Issue">Binder/Issue</option>
        <option value="Renewals">Renewals</option>
        <option value="Endorsements">Endorsements</option>
      </select>
    </div>
  );
};

export default StackSelector;
