import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", color: "" };
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        padding: "6%",
      },
      startViewUp: {
        flex: 56,
        //backgroundColor: "red",
        // justifyContent: "center",
        alignItems: "center",
      },
      appTitle: {
        fontSize: 45,
        fontWeight: "600",
        color: "#FFFFFF",
      },
      startViewDown: {
        flex: 44,
        backgroundColor: "white",
        justifyContent: "space-around",
        alignItems: "center",
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

    const image = { uri: "https://reactjs.org/logo-og.png" };
    return (
      <ImageBackground
        source={image}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View style={[styles.container]}>
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
      </ImageBackground>
    );
  }
}
