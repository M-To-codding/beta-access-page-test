import React from 'react';
import './assets/styles/App.scss';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/header";
import Dashboard from "./pages/dashboard/dashboard";
import BetaAccessContainer from "./pages/betaAccess/betaAccessContainer";
import Footer from "./components/footer";

function App() {
  return (
    <main className="app main-content">
      <div className="-padding-top80"/>
      <Router>
        <>
          <Header/>

          <Switch>
            <Route exact={true} path="/" component={Dashboard}/>
            <Route exact={true} path="/access-denied" component={BetaAccessContainer}/>
          </Switch>

          <Footer/>
        </>
      </Router>
    </main>
  );
}

export default App;
