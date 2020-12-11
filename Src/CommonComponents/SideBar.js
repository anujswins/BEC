import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image,Dimensions,FlatList} from 'react-native';
import { Icon } from 'react-native-elements';
import { DrawerActions } from 'react-navigation-drawer';
const DeviceWidth=Dimensions.get('screen').width;
const DeviceHeight=Dimensions.get('screen').height;

 const Item=({ item, navigate })=> {
  return (
    <View>


    <TouchableOpacity style={styles.listItem} onPress={()=>navigate(item.name)}>
   
    <Image  style={{height:DeviceHeight*0.8,width:DeviceWidth*0.9,}}source={item.icon}/>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
    </View>
 
  );
}

export default class Sidebar extends React.Component {
    state = {
      routes:[
        {
          name:"Dashboard",
          icon:require('../../assets/Dashboard.png')
      },

            {
                name:"Logout",
                icon:require('../../assets/logout.png')
            },
           
              
            
           
        ],
        msg:''
    }
  
    
    render(){
        return (
            <View style={styles.container}>
                <View style={{width:'100%',alignItems:'center'}}>
                <Image source={require("../../assets/profile.png")} style={styles.profileImg}/>
                {/* <Text style={{fontWeight:"bold",fontSize:16,marginTop:10,color:'#ffffff'}}>Janna Doe</Text> */}
                <Text style={{color:"#fff",marginBottom:10}}>{this.props.navigation.getParam('username')}</Text>
                </View>
             
                <FlatList
                    style={{width:"100%",backgroundColor:'#fff'}}
                    data={this.state.routes}
                    renderItem={({ item }) => 
                    <View>


                    <TouchableOpacity style={styles.listItem} onPress={()=>{
                       this.props.navigation.navigate(item.name)
                      this.props.navigation.dispatch(DrawerActions.toggleDrawer())}}>
                   
                    <Image  style={{height:DeviceHeight*0.04,width:DeviceWidth*0.07,resizeMode:'contain'}}source={item.icon}/>
                      <Text style={styles.title}>{item.name}</Text>
                    </TouchableOpacity>
        </View> }
                    // <Item  item={item} navigate={this.props.navigation.navigate}/>}
        
                    keyExtractor={item => item.name}
                />
            </View>
        )
    }
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#008ad1",
      paddingTop:40,
      alignItems:"center",
      flex:1,
  
    },
    listItem:{
      marginVertical:DeviceHeight*0.02,
        alignItems:"center",
        flexDirection:"row",
        marginLeft:DeviceWidth*0.04
    },
    title:{
        fontSize:16,
        marginLeft:12
    },
    header:{
      width:"100%",
      height:60,
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingHorizontal:20
    },
    profileImg:{
      width:DeviceWidth*0.3,
      height:DeviceHeight*0.2,
      borderRadius:40,
      resizeMode:'contain'
     
    },
    sidebarDivider:{
      height:1,
      width:"100%",
      backgroundColor:"lightgray",
      marginVertical:10
    }
  });