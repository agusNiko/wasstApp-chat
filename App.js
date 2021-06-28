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
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Chat";

// import react native gesture handler
import "react-native-gesture-handler";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Create the navigator
const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  alertMyText(input = []) {
    Alert.alert(input.text);
  }

  render() {
    return (
      <NavigationContainer initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="chat" component={chat} />

        {/* 
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder="Type here ..."
          />
          <Text>You wrote: {this.state.text}</Text>
          <Button
            onPress={() => {
              this.alertMyText({ text: this.state.text });
            }}
            title="Press Me"
          />
        </View> */}
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
