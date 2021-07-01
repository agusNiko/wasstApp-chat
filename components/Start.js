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
} from "react-native";
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
      },
      inner: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-end",
      },
      header: {
        fontSize: 45,
        fontWeight: "600",
        color: "#FFFFFF",
        marginBottom: "40%",
        marginTop: "30%",
        textAlign: "center",
      },
      input: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 0,
        backgroundColor: "white",
        padding: 10,
        fontWeight: "300",
        color: "#757083",
        opacity: 0.5,
      },
      btnContainer: {
        backgroundColor: "white",
        marginTop: 12,
        justifyContent: "space-evenly",
        padding: 10,
      },
      backgroundPhoto: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
      backgroundColors: {
        marginTop: 30,
        marginBottom: 30,
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-around",
      },
      startChatButton: {
        borderWidth: 50,
        fontWeight: "600",
        color: "#FFFFFF",
        backgroundColor: "#757083",
        marginBottom: 20,
      },
    });

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ImageBackground source={Image} style={styles.backgroundPhoto}>
          <View style={styles.container}>
            <View style={styles.inner}>
              <Text style={styles.header}>WassApp!</Text>
              <View style={styles.btnContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={(name) => this.setState({ name })} // on change state.name is modified.
                  value={this.state.name}
                  placeholder="Type your name..."
                />
                {/* <TextInput placeholder="Password" style={styles.input} />
              <TextInput placeholder="Confrim Password" style={styles.input} /> */}

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
              </View>
              <View style={{ flex: 1 }} />
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
