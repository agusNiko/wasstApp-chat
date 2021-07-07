import React from "react";
import {
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Text,
  FlatList,
} from "react-native";

import { GiftedChat, Bubble } from "react-native-gifted-chat";

import firebase from "firebase"; //import firebase to fetch the data from firebase Database
import firestore from "firebase";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    if (!firebase.apps.length) {
      // firebase credentials
      firebase.initializeApp({
        apiKey: "AIzaSyDVhtwqCNodsAc_gtmz6LdJqA7UN055OOw",
        authDomain: "wassapp-a2a81.firebaseapp.com",
        projectId: "wassapp-a2a81",
        storageBucket: "wassapp-a2a81.appspot.com",
        messagingSenderId: "415663943591",
        appId: "1:415663943591:web:61e693157a8bc694891082",
        measurementId: "G-8LK4E71NEF",
      });
    }

    //this.referenceChatMessages = firebase.firestore().collection("messages"); // fetches the data from the collection "messages", this.referenceChatMessages will receive the data and updates of the database
  }

  componentDidMount() {
    let name = this.props.route.params.name;

    this.props.navigation.setOptions({ title: "Hi " + name });

    this.referenceChatMessages = firebase.firestore().collection("messages");

    this.unsubscribe = this.referenceChatMessages
      .orderBy("createdAt", "desc")
      .onSnapshot(this.onCollectionUpdate);
    // this.setState({
    //   messages: [
    //     {
    //       _id: 1,
    //       text: "Hello developer ",
    //       createdAt: new Date(),
    //       user: {
    //         _id: 2,
    //         name: "React Native",
    //         avatar: "https://placeimg.com/140/140/any",
    //       },
    //     },
    //     {
    //       _id: 2,
    //       text: "This is a system message",
    //       createdAt: new Date(),
    //       system: true,
    //     },
    //   ],
    // });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        user: data.user,
        system: data.system,
        createdAt: data.createdAt.toDate(),
      });
      console.log(data.createdAt);
    });
    this.setState({
      messages,
    });
  };

  sendMessage(messages) {
    this.referenceChatMessages.add(messages[0]); // on send add the message[0] to the firebase then it automaticaly will be fetched
  }
  onSend(messages = []) {
    this.setState(
      (previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }),
      () => {
        this.sendMessage(messages);
      }
    );
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
        {/* <FlatList
          data={this.state.messages}
          renderItem={({ item }) => (
            <Text>
              {item.createdAt}: {item.text}
            </Text>
          )}
        /> */}
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
            name: "pedro",
            avatar: "https://placeimg.com/140/140/any",
          }}
        />
      </KeyboardAvoidingView> // If I add a view in as a parent of the GiftedChat, this last does not render
    );
  }
}
