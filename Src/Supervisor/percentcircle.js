import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Icon,
    search,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import PercentageCircle from 'react-native-percentage-circle';


export default class PercentageCir extends Component{
    render(){
        return(
            <View>
                <View>
    <PercentageCircle radius={35} percent={50} color={"#3498db"}></PercentageCircle>  
  </View>
   <View>
    {/* <PercentageCircle radius={35} percent={50} color={"#3498db"}>
      <Image style={{width:20,height:20}} source={{require('your image')}} />
    </PercentageCircle>   */}
  </View>
            </View>
        )
    }
}
