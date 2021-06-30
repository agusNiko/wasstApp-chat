import React from "react";
import { View, ImageBackground } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    let name = this.props.route.params.name;
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer " + name,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    let name = this.props.route.params.name;
    let chatColor = this.props.route.params.color;
    this.props.navigation.setOptions({ title: "Hi " + name });

    return (
      <GiftedChat
        listViewProps={{
          style: {
            backgroundColor: chatColor,
          },
        }} // listVieProps allows me to change the color background of the GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
