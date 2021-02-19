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

export default function childRewards({ route, navigation }:any) {
        return (
            <Text>Hej</Text>
        );
}