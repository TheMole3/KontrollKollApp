import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, TextInput } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import globalStyle from "../../stylesheets/globalStyle"

import SafeViewAndroid from "../../components/SafeViewAndroid";
import { TouchableOpacity } from 'react-native-gesture-handler';
import SvgUri from 'expo-svg-uri';

export default class createTask extends Component{ 
    constructor(props){ 
        super(props) 
        this.state = { taskName:'',taskPoints:'', child1: false, child2: false} 
        this.handleChange = this.handleChange.bind(this) 
      } 
      
      // Method causes to store all the values of the  
      // input field in react state single method handle  
      // input changes of all the input field using ES6  
      // javascript feature computed property names 
      handleChange(e, name){ 
          console.log(e)
        this.setState({ 
          // Computed property names 
          // keys of the objects are computed dynamically 
          [name] : e.value /* OBS! Kan vara fel e.*   */
        }) 
      } 


    render(){ 
    return (
        <View style={{flex:1}}>
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
          <View style={[globalStyle.container, {}]}>
            <View style={{alignContent: "flex-start"}}>
                <Text>Uppgiftens namn</Text>
                <TextInput
                    style={{ height: 40, width: 200,borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 10, backgroundColor:"#f6f7c3CC"}}
                    value = {this.state.taskName} 
                    onChange={e => this.handleChange(e,'taskName')}
                />
            </View>
            <View style={{alignContent: "flex-start"}}>
                <Text>Antal poäng</Text>
                <TextInput
                    keyboardType="numeric"
                    style={{ height: 40, width: 200,borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 10, backgroundColor:"#f6f7c3CC"}}
                    value = {this.state.taskPoints} 
                    onChange={e => this.handleChange(e,'taskPoints')}
                />
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "80%",
            }}>
                <TouchableOpacity 
                    style={[style.profileContainerStyle, this.state.child1 ? {
                        borderWidth: 2,
                        borderColor: "red"
                    }:{
                        borderWidth: 0
                    }]}
                    onPress={() => {this.setState({child1: !this.state.child1})}}
                >
                    <SvgUri
                        source={require('../../assets/emoji/cactus.svg')}
                    />
                    <Text style={style.profileText}>Adam</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.profileContainerStyle, this.state.child2 ? {
                        borderWidth: 2,
                        borderColor: "red"
                    }:{
                        borderWidth: 0
                    }]}
                    onPress={() => {this.setState({child2: !this.state.child2})}}
                    >
                    <SvgUri
                        source={require('../../assets/emoji/penguin.svg')}
                    />
                    <Text style={style.profileText}>Hugo</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>

        <LinearGradient
            colors={['#7400B8', "#6930C3", "#5E60CE", "#5390D9", "#4EA8DE", "#48BFE3", "#56CFE1", "#64DFDF", "#72EFDD", "#80FFDB"]}
            style={globalStyle.linearGradient}
            start={{ x: .4, y: 0 }}
            end={{ x: .9, y: 1 }}
            locations={[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]}
        ></LinearGradient>
      </View>
    );
    }
}

var style = {
    profileContainerStyle: {
        width: 120,
        height: 120,
        backgroundColor: "#f6f7c3CC",
        borderRadius: 50,
        padding: 10,
        paddingBottom: 40,
    },
    profileText: {
        fontFamily: "Oswald-Regular",
        fontSize: 20,
        alignSelf: "center",
        bottom: 1,
    }
}
