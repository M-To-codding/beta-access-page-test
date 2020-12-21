import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/App.scss';

import {Route, Router, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import Header from "../components/header";
import {history} from "../redux/store";
import DashboardContainer from "./dashboard/dashboardContainer";
import BetaAccessContainer from "./betaAccess/betaAccessContainer";
import Footer from "../components/footer";
import {checkAuthToken} from "../redux/actions/authActionCreators";
import NotFound from "./notFound";
import UsersListContainer from "./users/usersListContainer";

interface AppProps {
  loading: boolean,
  isAuthorized: boolean,
  error: {},
  checkAuthToken: any
}

function App(props: AppProps) {
  useEffect(() => {
    if (!props.isAuthorized) {
      props.checkAuthToken();
    }
  }, [props.isAuthorized]);

  return (
    <main className="app main-content">
      <div className="-padding-top80"/>
      <Router history={history}>
        <>
          <Header auth={props.isAuthorized}/>

          <Switch>
            <Route exact={true} path="/" render={(props) => <DashboardContainer/>}/>
            <Route exact={true} path="/users" render={(props) => <UsersListContainer/>}/>
            <Route exact={true} path="/access-denied" render={(props) => <BetaAccessContainer/>}/>
            <Route path="*" component={NotFound} render={(props) => <NotFound/>}/>
          </Switch>

          <Footer/>
        </>
      </Router>
    </main>
  );
}

const mapStateToProps = (state: any) => ({
  loading: state.auth.loading,
  isAuthorized: state.auth.isAuthorized,
  error: state.auth.error
});

const mapDispatchToProps = (dispatch: any) => ({
  checkAuthToken: () => dispatch(checkAuthToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
