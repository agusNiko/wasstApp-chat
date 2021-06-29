import React from "react";
import { View, Text, Button } from "react-native";

export default class Chat extends React.Component {
  render() {
    let name = this.props.route.params.name;
    let chatColor = this.props.route.params.color;
    this.props.navigation.setOptions({ title: "Hi " + name });

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: chatColor,
        }}
      >
        <Text>Hi {name}</Text>
        <Button
          title="Go back to Start"
          onPress={() => this.props.navigation.navigate("Start")}
        />
      </View>
    );
  }
}
