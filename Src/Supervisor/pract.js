import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    SafeAreaView,
    Dimensions,
    StyleSheet,
    Image,
    StatusBar
} from 'react-native';
import BottomTabNavigator from '../CommonComponents/BottomTabNavigator';
import DrawerHeader from '../CommonComponents/DrawerHeader';
import ApiLoader from '../../Src/PopUp/ApiLoader';
import AuthService from '../../Src/RestClient/AuthService';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const screen = Dimensions.get("screen");
const dwidth = Dimensions.get('screen').width;
const dheight = Dimensions.get('screen').height;
const tmparray= [];

export default class Notification extends Component {
    constructor(props) {
        super();
        this.state = {
         userAnswer:null,
         currentIndex:0,
         options:[],
         quizEnd:false,
         score:0,
         disabled:true,
         quiz: [
                 {id: 0, 
                 question: "what is capital of india",
                 options:['Delhi','Mumbai','gaziabaad'],
                 Answer: "Delhi",
                 },
                
                 {
                    id: 1, 
                    question: "who is the Prime Minister of india",
                    options:['Narendra Modi', 'Mohammad Ali Khan', 'parkash Singh Badal'],
                    Answer: "Delhi",
                  },
                ]
            }}
     loadQuiz=()=>{
         const {currentIndex}=this.state;
         this.setState(()=>{
             return{
                 question:this.state.quiz[currentIndex].question,
                 options:this.state.quiz[currentIndex].options,
                 answer:this.state.quiz[currentIndex].answer
             }

         })
     }

nextQuestionHandler=()=>{
    const{userAnswer,answer,score}=this.state
    if(userAnswer === answer){
        this.setState({
            score:score+1
        })
    }
     this.setState({
         currentIndex:this.state.currentIndex+1,
         userAnswer:null
     })
}
componentDidMount(){
    this.loadQuiz();
}
 checkAnswer = answer =>{
     this.setState({
       userAnswer:answer,
       disabled: false  
     })
 }
 componentDidUpdate(prevProps,PrevState)
 {
     const {currentIndex} = this.state;
     if(this.state.currentIndex!= PrevState.currentIndex){
         this.setState(()=>{
             return{
                 question:this.state.quiz[currentIndex].question,
                 options:this.state.quiz[currentIndex].options,
                 answer:this.state.quiz[currentIndex].answer
             }
         });
     }
 }
           
    render() {
        const{question,options,currentIndex,userAnswer,quizEnd} = this.state
     return (

        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white",
          
        
        }}>
            <StatusBar hidden={false} backgroundColor={"#008BD0"} />
            {
                            this.state.quiz.map((item, key) => (
            <View style={{height:'43%',backgroundColor:"white",width:"100%"}}>
    <Text style={{backgroundColor:"blue",fontSize:50}}>{item.question}</Text>
 
            <Text key = {options.id} classname={'options ${userAnswer===options?selected:null}'} 
           
             onPress={()=>this.checkAnswer(item.options)}> 
            <Text style={{backgroundColor:"blue",fontSize:50}}>{item.options}</Text>
                </Text>
   
    

            </View>
                            ))}

            <View style={{ height:'9%',backgroundColor: 'transparent' }}>
        <BottomTabNavigator isFeedbackIcon={true} isMenuIcon={true}  navigate={this.props.navigation.navigate}>
         </BottomTabNavigator>
                       </View>
            </SafeAreaView>
        )
    }
}
