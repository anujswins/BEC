
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Platform,
    KeyboardAvoidingView,
    TextInput,
    Dimensions,
    View,
    Text,
    Image,
    TouchableOpacity,
    Button, Alert
} from 'react-native';

const screen = Dimensions.get("screen");
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 class BottomTabNavigator extends React.Component {

    

    constructor(props) {
        super();
        <Text>(JSON.stringify(props))</Text>
        this.state = {
            isFeedbackIcon: props.isFeedbackIcon,
            isMenuIcon: props.isMenuIcon
        }

    }
    createButtonAlert = () =>{
        this.props.navigate('Feedback') 
    } 
    
    ButtonAlert = () =>{
        this.props.navigate('Dashboard')
        
        
    } 

    render() {
        const { dimensions } = this.state;
        return (

            
                
                    <View style={{
                        width: wp('100%'), height: hp('9%'), backgroundColor: "#008BD0",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row"
                    }}>
                        {this.state.isMenuIcon && 
                        
                            <TouchableOpacity onPress={ this.createButtonAlert}> 
                                <Image source={require('../../assets/menu.png')}
                                    style={{ width: wp('6%'), height: hp('2.5%'),marginRight:wp('4%') }} />
                             </TouchableOpacity> 
                        }
                     {this.state.isFeedbackIcon &&
                             <TouchableOpacity onPress={ this.ButtonAlert}> 
                                <Image source={require('../../assets/homeicon.png')}
                                    style={{ width: wp('7%'), height: hp('4%'),marginLeft:wp('4%') }} />
                             </TouchableOpacity>
                     }
                    </View>

        






        )
    }
}
export default BottomTabNavigator;
