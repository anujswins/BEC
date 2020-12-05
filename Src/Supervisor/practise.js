import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button, Dimensions, Image, FlatList, Alert, TouchableOpacity } from 'react-native';

const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width
export default class Practise extends Component {




render(){
    return (
        <View style={{ flex: 1, width: '100%', backgroundColor: "silver" }}>
            <View style={{ height: height * 0.1, width: width, backgroundColor: "yellow" }}>
                <Text>
                    View 1
                    </Text>

            </View>
            <View style={{ height: height * 0.8, width: width, backgroundColor: "pink" }}>
                <Text>
                    View 2
                    </Text>
            </View>
            <View style={{ height: height * 0.1, width: width, backgroundColor: "blue" }}>
                <Text>
                    View 3
                    </Text>
            </View>
        </View>
    )
}
}