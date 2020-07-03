import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import CreateBoard from "./components/CreateBoard/CreateBoard";
import Boards from "./components/Boards/Boards";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pro-organiser-application" component={Home} />
            <Route path="/createboard" component={CreateBoard} />
            <Route path="/:id/:boardName" component={Boards} />
            <Route render={() => <h2>404 Page Not Found</h2>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
