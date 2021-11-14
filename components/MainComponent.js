import React, { Component } from "react";
import Home from "./HomeComponent";
import Login from "./LoginComponent";
import Maps from "../screens/Maps";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, withNavigation } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
  },
  {
    Login: Login,
  },
  {
    Maps: Maps,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

const Main = () => {
  return <AppContainer />;
};

export default withNavigation(Main);
