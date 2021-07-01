import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Bubble } from "react-native-gifted-chat";
import Image from "./Background-Image.png"; //this is the way to import imgs to de used in the app.

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", color: "" };
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        //justifyContent: "center",
        padding: "6%",
      },
      inner: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-end",
      },
      startViewUp: {
        flex: 56,
        //backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      },
      appTitle: {
        fontSize: 45,
        height: 50,
        fontWeight: "600",
        color: "#FFFFFF",
        margin: "auto",
      },
      startViewDown: {
        backgroundColor: "white",
        justifyContent: "space-around",
        alignItems: "center",
        position: "relative",
        flex: 44,
      },
      textInput: {
        borderColor: "gray",
        borderWidth: 1,
        backgroundColor: "white",
        width: "88%",
        height: "20%",
        fontWeight: "300",
        color: "#757083",
        opacity: 0.5,

        //“Your name”: font size 16, font weight 300, font color #757083, 50% opacity
      },
      startChatButton: {
        borderWidth: 50,
        fontWeight: "600",
        color: "#FFFFFF",
        backgroundColor: "#757083",
      },

      backgroundColors: {
        width: "88%",
        height: "20%",
        flexDirection: "row",
        justifyContent: "space-around",
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
    });

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "height" : "padding"}
        style={{ flex: 1 }}
      >
        <ImageBackground
          source={Image}
          style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
          }}
        >
          <View style={[styles.container]}>
            <View style={[styles.inner]}>
              <View style={styles.startViewUp}>
                <Text style={styles.appTitle}>WassApp!</Text>
              </View>
              <View style={styles.startViewDown}>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(name) => this.setState({ name })} // on change state.name is modified.
                  value={this.state.name}
                  placeholder="Type here ..."
                />

                <View style={styles.backgroundColors}>
                  <View
                    style={{
                      borderColor: "red",
                      height: 55,
                      width: 55,
                      borderWidth: 3,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      className="colorButton1"
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 100,
                        borderWidth: 1,
                        backgroundColor: "#090C08",
                      }}
                      onPress={() => {
                        this.setState({ color: "#090C08" });
                      }}
                    >
                      <View style={{ height: 50, width: 50 }} />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    className="colorButton2"
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 100,
                      borderWidth: 1,
                      backgroundColor: "#474056",
                    }}
                    onPress={() => {
                      this.setState({ color: "#474056" });
                    }}
                  >
                    <View style={{ height: 50, width: 50 }} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="colorButton3"
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 100,

                      backgroundColor: "#8A95A5",
                    }}
                    onPress={() => {
                      this.setState({ color: "#8A95A5" });
                    }}
                  >
                    <View style={{ height: 50, width: 50 }} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="colorButton4"
                    style={{
                      height: 50,
                      width: 50,
                      borderRadius: 100,

                      backgroundColor: "#B9C6AE",
                    }}
                    onPress={() => {
                      this.setState({ color: "#B9C6AE" });
                    }}
                  >
                    <View style={{ height: 50, width: 50 }} />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={{
                    width: "88%",
                  }}
                >
                  {/* here touchableOpacity allows me to increase the size of the button */}
                  <Button
                    style={styles.startChatButton}
                    title="Start Chatting"
                    onPress={
                      () =>
                        this.props.navigation.navigate("Chat", {
                          name: this.state.name,
                          color: this.state.color,
                        }) //this code navigate to Chat screen and send name as a props
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
