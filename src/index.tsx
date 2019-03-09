import * as React from "react";
import * as ReactDOM from "react-dom";

import List from "test-ts-component-list";

const listData = [
  { key: "001", value: "Hello" },
  { key: "002", value: "TypeScript" }
];

const App = () => {
  return (
    <div>
      <List
        data={[
          { key: "001", value: "hello" },
          { key: "002", value: "typescript" }
        ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));