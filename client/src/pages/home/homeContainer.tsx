import React, {useEffect} from "react";
import Dashboard from "../dashboard/dashboard";
import {connect} from "react-redux";
import Loader from "../../components/loader";
import {history} from "../../redux/store";
import {authorizationFailure} from "../../redux/actions/authActionCreators";
import {USER_NOT_AUTHORIZED} from "../../utils/errorTexts";
import Home from "./home";
import {getProductsActionCreators} from "../../redux/actions/products/getProductsActionCreators";

interface HomeProps {
  loading: boolean,
  isAuthorized: boolean,
  authorizationFailure: any,
  getProducts: any,
  productsList: any
}

function HomeContainer(props: HomeProps) {
  let productsList = props.productsList;

  useEffect(() => {
    props.getProducts();
  }, []);

  if (props.loading) {
    return <Loader/>
  }

  if (props.isAuthorized) {
    return <Dashboard/>
  }

  return <Home productsList={productsList}/>
}

const mapStateToProps = (state: any) => ({
  loading: state.auth.loading,
  isAuthorized: state.auth.isAuthorized,
  productsList: state.products.productsList
});


const mapDispatchToProps = (dispatch: any) => ({
  authorizationFailure: (data: any) => dispatch(authorizationFailure(data)),
  getProducts: (data: any) => dispatch(getProductsActionCreators(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);