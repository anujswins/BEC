import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Image,
    TextInput,
    Modal,
    
} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from "react-native-simple-radio-button";
import {Picker} from '@react-native-community/picker';

//import { SelectMultipleButton, SelectMultipleGroupButton } from 'react-native-selectmultiple-button'

var radio_props = [
    { label: "BEC-3-Phase Motor", value: 0 },
    { label: "BEC-2-Phase Motor", value: 1 },
    { label: "BEC-1-Phase Motor", value: 0 },
    { label: "BEC-3-Phase Induction Motor", value: 1 },
    { label: "BEC-3-Phase Motor", value: 0 },
    { label: "BEC-3-Phase Motor", value: 1 },
    { label: "BEC-3-Phase Motor", value: 0 },
    { label: "BEC-3-Phase Motor", value: 1 },
    
  ]

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
export default class ModalSelect extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            MachType:[{Motor:"BEC-3-Phase Motor"}],
            radio: radio_props,
            language: 'java',
        }
    }

    // onValueChange(itemValue) {
    //     this.setState({
    //     language: itemValue
    //     });
    //     if (itemValue === 'java') {
    //     this._onPressJavaButton();
    //     } else if (itemValue === 'js') {
    //     this._onPressJavaScriptButton();
    //     }
    //     } 
    render() {
        return (
            <View style={{ flex: 1, height: height, width: width, backgroundColor: "red" }}>
                <View style={{ height: height * 0.5, width: width, backgroundColor: "green", alignItems: "center", justifyContent: "center" }}>
                    
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <TouchableOpacity onPress={()=>{this.setState({show:true})}}>
                            <Text style={{ backgroundColor: 'blue', marginTop: height * 0.02, paddingHorizontal: width * 0.05, paddingVertical: height * .01 }}>
                                ShowModal
                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>alert("vhshgd")}>
                                <Text>
                                    Choose
                                </Text>
                                </TouchableOpacity>
                                {/* <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  mode="dropdown"
//  onPress={()=>{this.setState({show:true})}}
// onPress={()=>this.pickerActivity()} 

onValueChange={(itemValue, itemIndex) => this.onValueChange(itemValue)
    
  }>
  <Picker.Item label="Machine Type" value="java" />
  
</Picker> */}
                                
                                
                    
                    </View>
                </View>
                {(this.props.navigation.getParam('showModal'))  ?          
                    <Modal visible={this.state.show}
                    transparent={true}>
                        <View style={{backgroundColor:"#000000aa", flex:1}}>
                            <View style={{height:height*0.3,width:width*0.9,backgroundColor:"#ffffff", marginVertical:height*0.25, marginHorizontal:width*0.05}}>
                                <View style={{height:height*0.07, width:width*0.9, backgroundColor:"#ffffff", justifyContent:"center", alignItems:"flex-start", paddingLeft:width*0.02}}>
                                <Text style={{fontWeight:"bold", fontSize:18}}>
                                    Select Machine Type
                                </Text>
                                </View>
                                <View style={{height:height*0.18, width:width*0.9}}>
                                    <FlatList data={this.state.MachType}
                                    keyExtractor={(item,index)=>index.toString()}
                                    renderItem={({item})=>(
                                        <View style={{backgroundColor:"#ffffff", marginLeft:width*0.05}}>
 <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={false}
              labelHorizontal={true}
              buttonColor={"#D6D6D6"}
              animation={false}
              buttonSize={8}
              labelStyle={{ fontSize: 15, marginRight: width * 0.04,}}
              onPress={(value, index) => {
                this.setState({ value1: value })
                this.setState({ value1: index })
              }}
              radioStyle={{paddingRight: 40, marginVertical:height*0.01}}
              wrapStyle={{marginVertical:height*0.09}}
              

            />
                                        </View>
                                    )}>

                                    </FlatList>
                               
            </View>
            <View style={{height:height*0.05, width:width*0.9, backgroundColor:"#ffffff", alignItems:"flex-end", justifyContent:"flex-end", paddingRight:width*0.05, paddingBottom:height*0.02}}>
                                <TouchableOpacity onPress={()=>{this.setState({})}}>
                                <Text style={{fontSize:16, color:"#008AD2", fontWeight:"bold"}}>
                                    CHOOSE
                                </Text>
                                </TouchableOpacity>
                                </View>
                            
                                
                            </View>
                        </View>

                    </Modal>
:alert('')}
           
            </View>
        )
    }
}