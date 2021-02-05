import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    pointsText: {
      textAlignVertical: 'center',
      fontSize: 40,
      color: "#16DB93",
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: {width: -0.5, height: -0.5},
      textShadowRadius: 10,
      fontFamily: "Oswald-Regular",
      fontWeight:'bold',
      marginBottom: 10,
    },
    TodoView: {
      backgroundColor: "#F8F0C6CC",
      marginLeft: 5,
      marginRight: 5,
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: "#66614f",
      borderRadius: 5,
      marginBottom:10,
      padding:15,
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
    },
    profilePic: {
      right:10,
      top:0,
      position: "absolute",
      width: 40,
      height: 40,
      backgroundColor: "white",
      borderRadius: 50,
      margin: 5,
    },
    taskPic: {
      alignSelf: "center",
      marginRight: 10,
      width: 30,
      height: 30,
    }
  });
  