import React, { Component, useEffect, useState } from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import SafeViewAndroid from "../../components/SafeViewAndroid";
import SvgUri from 'expo-svg-uri';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import globalStyle from "../../stylesheets/globalStyle"
import homeStyle from '../../childApp/stylesheets/homeStyle';

import taskImage from '../../assets/taskImages/taskImages'
import { useIsFocused } from '@react-navigation/native';
import emojis from '../../assets/emoji/emojis';

const ToDo = ({props}:any) => {
    if(props.item.split) return (
        <View style={[homeStyle.TodoView, {marginTop:20, backgroundColor: props.item.color}]}>
            <Text style={{fontFamily: "Oswald-Light"}}>{props.item.split}</Text>
        </View>
    )
    return (
      <TouchableOpacity style={[homeStyle.TodoView, props.item.done ? {backgroundColor: "#95e8a1CC"}: {}]} // Clickable object
        onPress={() => {
            if(props.item.done) props.navigation.navigate('Picture', {"task": props.item}) // Navigate to camera and send item info with
        }}
      >
        <Image // Icon for task
          style={homeStyle.taskPic}
          source={taskImage[props.item.icon]}
        />
        <Text numberOfLines={1} style={{ flex: 4, textAlign: "left", fontSize:20, fontFamily: "Oswald-Light", fontWeight:"300"}}>{props.item.title}</Text>
        <Text style={{flex: 1, textAlign: "right", fontSize:15, marginRight:10, fontFamily: "Oswald-Light", fontWeight:"300"}}>{props.item.points + "p"}</Text>
      </TouchableOpacity >
    )
}

export default function children({ route, navigation }:any) {
        const { choosenChild } = route.params;
        // Get the tasks from kontroll.melo.se before loading app
        const [isLoading, setLoading] = useState(true);
        const [DATA, setData] = useState();
        useEffect(() => { 
            fetch("https://kontroll.melo.se/getTasks?id=" + choosenChild).then((response) => response.json()).then((response) => {
            setData( response[0] );
                setLoading( false )
            })
        }, [])

        const isFocused = useIsFocused() // When focused re-render tasks
        useEffect(() => {
            fetch("https://kontroll.melo.se/getTasks?id=" + choosenChild).then((response) => response.json()).then((response) => {
                setData( response[0] );
            })
        } , [isFocused])

        function childTasks() {            
            const renderItem = ({item, index}:any) => ( // Render into flatlist
                <ToDo props={{item, navigation, index}} />
            )

            if (isLoading) {
                return (<Text>Loading...</Text>)
            }

            var taskData = DATA.tasks

            let done = taskData.filter(e => e.done);
            let notDone = taskData.filter(e => !e.done);

            if(done.length  > 0) done.unshift({
                split: "Gjorda uppgifter",
                id: "GjordaUppgifter",
                color: "#77d185CC"
            })

            if(notDone.length > 0) done[done.length++] = {
                split: "Ogjorda uppgifter",
                id: "OgjordaUppgifter",
                color: "#f6f7c3CC"
            }


            taskData = done.concat(notDone)
            console.log(taskData)

            return (
                <FlatList
                    data={taskData}
                    extraData={taskData}
                    renderItem={( item, index ) => renderItem(item, index)}
                />
            );
        }

        console.log(DATA)
        return (
        <View style={{flex:1}}>
            <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
            <View style={globalStyle.container}>
                <View style= {{flexDirection:"row", width: "80%", justifyContent:"space-evenly"}}>
                    <TouchableOpacity style={[profileContainerStyle, {
                        width: 100
                    }]}>
                        <Text style={buttonStyle}>Uppgifter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={profileContainerStyle}>
                        <SvgUri
                            source={emojis[DATA ? DATA.profilePic: "" ]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[profileContainerStyle, {
                        width: 100
                    }]}>
                        <Text style={buttonStyle}>Belöningar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: "80%", flex: 1}}>
                    {childTasks()}
                </View>
            </View>
            </SafeAreaView>
            <LinearGradient
                colors={['#7400B8', "#6930C3", "#5E60CE", "#5390D9", "#4EA8DE", "#48BFE3", "#56CFE1", "#64DFDF", "#72EFDD", "#80FFDB"]}
                style={globalStyle.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: .5, y: 1 }}
                locations={[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]}
            ></LinearGradient>
        </View>
        );
}

var profileContainerStyle = {
    marginTop: 10,
    width: 50,
    height: 50,
    backgroundColor: "#f6f7c3CC",
    borderRadius: 20,
    padding: 5,
}
var buttonStyle = {
    fontFamily: "Oswald-bold",
}