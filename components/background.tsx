import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import globalStyle from "../stylesheets/globalStyle"

    const background = (item:any) => (
        <LinearGradient
        colors={['#2C699A', "#54478C", "#058BA8", "#16DB93", "#83E377", "#B9E769", "#EFEA5A", "#F1C453", "#F29E4C"]}
        style={globalStyle.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: .5, y: 1 }}
        locations={[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9]}
      ></LinearGradient>
    )
    export default background;