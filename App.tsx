
import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';


const DATA = [
  {
    title: 'First Item',
    points: "200",
  },
  {
    title: 'Ta ut sopornaa',
    points: 500,
  },
  {
    title: 'Mata kattena',
    points: 50,
  },
];

const colorValues = [
  "#54478C", "#058BA8", "#16DB93", "#83E377", "#B9E769", "#EFEA5A", "#F1C453", "#F29E4C"
]
var randomColor = (lastColor: String|Boolean = false) => {
  let color = colorValues[Math.floor(Math.random()*colorValues.length)]
  if(color == lastColor) randomColor(lastColor); else return color;
}

let lastColor: boolean|string|undefined = false;
const ToDo = ({props}) => {
    var color = randomColor(lastColor || false)
    lastColor = color
    return (
      <View style={[styles.TodoView, {backgroundColor: color}]}>
        <Text numberOfLines={1} style={{ flex: 4, textAlign: "left", fontSize:20, fontFamily: "Roboto Mono", fontWeight:"300"}}>{props.title}</Text>
        <Text style={{flex: 1, textAlign: "right", fontSize:15, marginRight:10, fontFamily: "Roboto Mono", fontWeight:"300"}}>{props.points + "p"}</Text>
      </View>
    )
}

export default function App() {
  const renderItem = ({ item }) => (
    <ToDo props={item} />
  );

  return (
    <View style={{flex:1}}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "red"}}>
        <View style={styles.container}>
          <View style={{flex:.18, alignItems:'center', justifyContent: "center"}}>
            <Text style={styles.pointsText}>5693p</Text>
          </View>
          <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          style={{width:"80%"}}
          />
        </View>
      </SafeAreaView>
      <LinearGradient
          colors={['#2C699A', '#fff']}
          style={styles.linearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: .5, y: 1 }}
          locations={[0.3,1]}
        ></LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointsText: {
    textAlignVertical: 'center',
    fontSize: 40,
    color: "#16DB93",
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: -0.5, height: -0.5},
    textShadowRadius: 10,
    fontWeight:'bold',
    marginBottom: 15,
  },
  TodoView: {
    flexDirection: "row", 
    alignItems: "center", 
    //borderWidth: 2, 
    borderRadius: 5, 
    marginBottom:10, 
    padding:15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  linearGradient: {
    zIndex: -5,
    elevation: -5,
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: "100%",
    width: "100%",
  },
});
