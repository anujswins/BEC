import React, {PureComponent} from 'react';
import { TouchableOpacity } from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Camera extends PureComponent 
{ 
 constructor(props) {
    super();
      this.state = {
      takingPic: false,
    };
  }
  takePicture = async () => {
    if (this.camera && !this.state.takingPic) {

      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      this.setState({takingPic: true});

      try {
         const data = await this.camera.takePictureAsync(options);
         Alert.alert('Success', JSON.stringify(data));
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        this.setState({takingPic: false});
      }
    }
  };
render() {
  return (
    
    <RNCamera 
      ref={ref => {
        this.camera = ref;
      }}
      captureAudio={false}
      style={{flex: 1}}
     type={RNCamera.Constants.Type.back}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
        
      }} >
                         <TouchableOpacity
                        style={{width: '100%', height: 'auto', backgroundColor: 'white', justifyContent: 'center'}}
                        onPress={this.takePicture}>
      <Icon name="camera" color="blue"></Icon>
      </TouchableOpacity>
      </RNCamera>
    );
 
  }}