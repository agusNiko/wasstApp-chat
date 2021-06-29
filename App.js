import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from "react-native";

// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

// import react native gesture handler
import "react-native-gesture-handler";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Create the navigator--> by creating a constant we avoid to call the function each time.
const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  box1: {
    // flex: 10,
    backgroundColor: "blue",
    width: 100,
    height: 200,
  },
  box2: {
    flex: 120,
    backgroundColor: "red",
  },
  box3: {
    // flex: 350,
    backgroundColor: "yellow",
    width: 50,
    height: 100,
  },
});
