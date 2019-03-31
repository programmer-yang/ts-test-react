import * as React from "react";
import * as ReactDOM from "react-dom";
import Layout from "./components/layout";
import Home from "./pages/home";

ReactDOM.render(
  <Layout>
    <Home />
  </Layout>,
  document.getElementById("root")
);
