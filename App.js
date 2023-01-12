import React, { Component } from "react";
import { View } from "react-native";
import Principal from "./src/Principal";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (

      <View style={{ backgroundColor: '#111', flex: 1 }}>

        <Principal />

      </View>

    )
  }
}