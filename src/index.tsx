import "@exampledev/new.css/new.css";

import { h, render, FunctionComponent, Fragment } from "preact";
import { Header } from "./components/Header";
import { Table } from "./components/Table";

const App: FunctionComponent = () => (
  <Fragment>
    <Header />
    <Table />
    <p>
      This page simply echoes the URL Query Parameters given in the URL, which
      might be useful for debugging callbacks.
    </p>
  </Fragment>
);

const root = document.getElementById("root");
if (root) render(<App />, root);
