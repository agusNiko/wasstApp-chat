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
import Image from "./Background-Image.png"; //this is the way to import imgs to de used in the app.

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", color: "", activeColor: "colorButton1" };
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      inner: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-end", // justifyContent flex-end is necessary fot the proper work of KeyboardAvoidingView
      },
      header: {
        fontSize: 45,
        fontWeight: "600",
        color: "#FFFFFF",
        marginBottom: "60%",
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
                <View style={styles.backgroundColors}>
                  <View
                    style={{
                      borderColor:
                        this.state.activeColor === "colorButton1"
                          ? "#090C08"
                          : "white",
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
                        borderColor: "white",
                        backgroundColor: "#090C08",
                        // outlineWidth: 1,
                        // outlineStyle: "solid",
                        // outlineColor: "#090C08",
                      }}
                      onPress={() => {
                        this.setState({
                          color: "#090C08",
                          activeColor: "colorButton1",
                        });
                      }}
                    >
                      <View style={{ height: 50, width: 50 }} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      borderColor:
                        this.state.activeColor === "colorButton2"
                          ? "#474056"
                          : "white",
                      height: 55,
                      width: 55,
                      borderWidth: 3,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      className="colorButton2"
                      style={{
                        height: 50,
                        width: 50,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "#474056",
                      }}
                      onPress={() => {
                        this.setState({
                          color: "#474056",
                          activeColor: "colorButton2",
                        });
                      }}
                    >
                      <View style={{ height: 50, width: 50 }} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      borderColor:
                        this.state.activeColor === "colorButton3"
                          ? "#8A95A5"
                          : "white",
                      height: 55,
                      width: 55,
                      borderWidth: 3,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      className="colorButton3"
                      style={{
                        height: 50,
                        width: 50,
                        borderWidth: 1,
                        borderRadius: 100,
                        borderColor: "white",
                        backgroundColor: "#8A95A5",
                      }}
                      onPress={() => {
                        this.setState({
                          color: "#8A95A5",
                          activeColor: "colorButton3",
                        });
                      }}
                    >
                      <View style={{ height: 50, width: 50 }} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      borderColor:
                        this.state.activeColor === "colorButton4"
                          ? "#B9C6AE"
                          : "white",
                      height: 55,
                      width: 55,
                      borderWidth: 3,
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      className="colorButton4"
                      style={{
                        height: 50,
                        width: 50,
                        borderWidth: 1,
                        borderColor: "white",
                        borderRadius: 100,
                        backgroundColor: "#B9C6AE",
                      }}
                      onPress={() => {
                        this.setState({
                          color: "#B9C6AE",
                          activeColor: "colorButton4",
                        });
                      }}
                    >
                      <View style={{ height: 50, width: 50 }} />
                    </TouchableOpacity>
                  </View>
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
