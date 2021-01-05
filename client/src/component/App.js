import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamDelete from "./streams/StreamDelete";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />

        <div>
          <Route path="/" exact>
            <StreamList />
          </Route>
          <Route path="/stream/new" exact>
            <StreamCreate />
          </Route>
          <Route path="/stream/edit" exact>
            <StreamEdit />
          </Route>
          <Route path="/stream/show" exact>
            <StreamShow />
          </Route>
          <Route path="/stream/delete" exact>
            <StreamDelete />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
