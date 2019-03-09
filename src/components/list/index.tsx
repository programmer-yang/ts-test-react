import * as React from "react";
import "./index.css";

interface dataItem {
  key: string;
  value: string;
}

interface ListProps {
  data: dataItem[];
}

class List extends React.Component<ListProps> {
  render() {
    const { data = [] } = this.props;
    const liHTML = data.map(item => <li key={item.key}>{item.value}</li>);
    return <ul className="list">{liHTML}</ul>;
  }
}

export default List;
