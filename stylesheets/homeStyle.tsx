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
      marginLeft: 5,
      marginRight: 5,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 5,
      marginBottom:10,
      padding:15,
      elevation:2,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
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
    }
  });
  