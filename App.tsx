
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const DATA = [
  {
    title: 'First Item',
    points: "200",
  },
  {
    title: 'Second Item',
    points: "500",
  },
  {
    title: 'Third Item',
    points: "50",
  },
];

const colorValues = [
  "54478C", "2C699A", "058BA8", "16DB93", "83E377", "B9E769", "EFEA5A", "F1C453", "F29E4C"
]
var randomColor = {color:colorValues[Math.floor(Math.random()*colorValues.length)]}

const ToDo = ({props}) => {
    return (
      <View style={}>
        <Text numberOfLines={1} style={{ flex: 4, textAlign: "left", fontSize:35}}>{props.title}</Text>
        <Text style={{flex: 1, textAlign: "right", fontSize:20}}>{props.points}</Text>
      </View>
    )
}

export default function App() {
  const renderItem = ({ item }) => (
    <ToDo props={item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pointsText}>5693p</Text>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      style={{width:"90%"}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointsText: {
    fontSize: 40,
    flex: .15,
    color: "#16DB93",
  },
  TodoView: {
    flexDirection: "row", 
    alignItems: "center", 
    borderWidth: 2, 
    borderRadius: 10, 
    marginBottom:5, 
    padding:5
  }
});
