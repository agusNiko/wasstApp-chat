import React from "react";
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    let name = this.props.route.params.name;

    this.props.navigation.setOptions({ title: "Hi " + name });

    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer ",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
        {
          _id: 2,
          text: "This is a system message",
          createdAt: new Date(),
          system: true,
        },
      ],
      name: name,
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000",
          },
        }}
      />
    );
  }

  render() {
    let chatColor = this.props.route.params.color;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? null : null}
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <GiftedChat
          listViewProps={{
            style: {
              backgroundColor: chatColor,
            },
          }} // listVieProps allows me to change the color background of the GiftedChat
          renderBubble={this.renderBubble.bind(this)} //changes the color of the chat bubble
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </KeyboardAvoidingView> // If I add a view in as a parent of the GiftedChat, this last does not render
    );
  }
}
