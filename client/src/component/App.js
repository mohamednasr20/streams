import React from "react";
import { Router, Route } from "react-router-dom";
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />

        <div>
          <Route path="/" exact>
            <StreamList />
          </Route>
          <Route path="/stream/new" exact>
            <StreamCreate />
          </Route>
          <Route path="/stream/edit/:id" exact>
            <StreamEdit />
          </Route>
          <Route path="/stream/show" exact>
            <StreamShow />
          </Route>
          <Route path="/stream/delete" exact>
            <StreamDelete />
          </Route>
        </div>
      </Router>
    </div>
  );
};

export default App;
