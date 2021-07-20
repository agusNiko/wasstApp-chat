# wasstApp-chat
### A chat app for mobile devices using React Native, Expo, and Google Firestore Database. The app provides users with a chat interface and options to share images and their location.

## Key Features
● Users can enter their names and choose a background color for the chat screen before joining the chat.

● A page displaying the conversation, as well as an input field and submit button.

● The chat provides users with two additional communication features: sending images and location data.

● Data gets stored online and offline.

## Technical Requirements
● Written in React Native.

● Developed using Expo.

● Chat conversations are stored in Google Firestore Database.

● The app authenticates users anonymously via Google Firebase authentication.

● Chat conversations are stored locally.

● The app must let users pick and send images from the phone’s image library.

● The app lets users take pictures with the device’s camera app, and send them.

● The app storages images in Firebase Cloud Storage.

● The app is able to read the user’s location data.

● Location data is sent via chat in a map view.

● The chat interface and functionality were created using the Gifted Chat library.

## Getting started

### Setting Up a React Native Project
### Setting Up Expo and Your Development Environment
It is recommended to use [Expo](https://expo.io/) for developing and testing React Native apps.

● Install the Expo Command Line Interface (CLI) on your machine (make sure you have the latest LTS Node version installed.)

npm install expo-cli --global

you’ll need the Expo app for your phone to run your project on. Search for the Expo app in the relevant app store for your device (iOS or Android).

● Head over to the  [Expo signup page](https://expo.io/) and follow the instructions to create an account.

● Now, you should be able to log in to Expo from your browser and mobile app.

## Installing Dependencies
● Download/clone this repository
● With your Terminal go to the project directory and install the application's dependencies by entering:

`npm install`

dependencies are: 

`@react-native-community/async-storage @react-native-community/masked-view @react-native-community/netinfo @react-navigation/native @react-navigation/stack babel-preset-env better-docs expo expo-font expo-image-picker expo-location expo-permissions expo-updates firebase fsevents prop-types react react-dom react-google-maps react-native react-native-gesture-handler react-native-gifted-chat react-native-keyboard-spacer react-native-maps react-native-parsed-text react-native-reanimated react-native-safe-area-context react-native-screens react-native-svg react-native-web react-native-web-maps react-navigaion react-navigation-stack`

## Running the App

To start the project, run in your terminal:

`expo start`

## Setting Up your Firebase Database configuration

● head over to [Google Firebase](https://firebase.google.com/).

● Sign in in the upper-right corner.

● Go to Console.

● Click Add Project.

● Give your project a name.

● With the default settings selected, agree to the terms and click Create Project.

● Click "Develop" from the menu on the left-hand side and select "Cloud Firestore".

● Click "Create Database", select "Start in production mode" and hit next.

● select the location of Cloud Firestore.

● Hit "Start Collection" and give it the name "messages", press "auto-id" and confirm the selections on the following screen.

## Getting the firebaseCredentials to be added to your project

● Under the General tab, you’ll find a section called Your apps, which is where you can generate configurations for different platforms. 

● Click the Firestore for Web button (it may be shown as the </> icon).

● Fill in a name for your chat application (e.g., “my_chat_app”), then click Register to generate the configuration code, you will see something like this:

```javascript

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  var firebaseConfig = {
    apiKey: "your_apiKey",
    authDomain: "yout_authDomain",
    projectId: "yout_ProjectId",
    storageBucket: "your_storageBucket",
    messagingSenderId: "your_messagingSenderId",
    appId: "your_appId",
    measurementId: "Your_measurementId"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
```

## inside Chat.js add your credential inside the constructor

```javascript
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      user: {
        _id: 1,
        name: "pedro",
        avatar: "https://placeimg.com/140/140/any",
      },
      uid: 0,
      loggedInText: "Please wait, you are getting logged in",
      isConnected: false,
      image: null,
    };
    if (!firebase.apps.length) {
      // firebase credentials
      firebase.initializeApp({
        apiKey: "your_apiKey",
        authDomain: "yout_authDomain",
        projectId: "yout_ProjectId",
        storageBucket: "your_storageBucket",
        messagingSenderId: "your_messagingSenderId",
        appId: "your_appId",
        measurementId: "Your_measurementId"
      });
    }

    this.referenceChatMessagesUser = null;
  }
  ```





