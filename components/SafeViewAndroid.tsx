import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#ff00ff00",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
