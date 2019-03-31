import * as React from "react";
import "./index.css";

import List from "test-ts-component-list";

import { FormattedMessage, intlShape } from "react-intl";

class Home extends React.Component {
  static contextTypes = {
    intl: intlShape
  };
  private testRef: any;

  constructor(props: any) {
    super(props);
    this.testRef = React.createRef();
  }

  render() {
    const { intl } = this.context;
    const listData = [
      { key: "001", value: intl.formatMessage({ id: "hello" }) },
      { key: "002", value: "TypeScript" }
    ];
    return (
      <div className="testdiv" ref={this.testRef}>
        <List data={listData} />
        <p>
          <FormattedMessage id="hello" /> React
        </p>
      </div>
    );
  }
}

export default Home;
