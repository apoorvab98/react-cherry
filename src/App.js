import React from "react";
import UserComponent from "./components/UserComponent"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>


      <Router>
      <Switch>
          <Route>
            <UserComponent />

        </Route>

      </Switch>
      </Router>
      </>
    );



    
  }
}

export default App;