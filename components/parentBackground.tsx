import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import globalStyle from "../stylesheets/globalStyle"

    const background = (item:any) => (
        <LinearGradient
        colors={['#7400B8', "#6930C3", "#5E60CE", "#5390D9", "#4EA8DE", "#48BFE3", "#56CFE1", "#64DFDF", "#72EFDD", "#80FFDB"]}
        style={globalStyle.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: .5, y: 1 }}
        locations={[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]}
      ></LinearGradient>
    )
    export default background;