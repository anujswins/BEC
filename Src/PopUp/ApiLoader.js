
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
  Text,
} from 'react-native';

const ApiLoader = props => {
  const {
    loading,
    ...attributes
  } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={props.visibility}
      onRequestClose={() => {console.log('close modal')}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loading} color={props.loadingColor}/>
           <Text>Please wait...</Text>
        </View>
        
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    // backgroundColor: '#00000040'
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default ApiLoader;


// import React from 'react';
// import {ActivityIndicator, Modal, TouchableWithoutFeedback, View} from 'react-native';
// import PropTypes from 'prop-types';

// const ApiLoader = (props) => {
//     return (
//         <Modal
//             visible={props.visibility}
//             transparent={true}
//             onBackdropPress={() => props.onCancelPress()}
//             animationType={'fade'}
//             onRequestClose={() => props.onCancelPress()}>
//             <TouchableWithoutFeedback onPress={() => props.onCancelPress()}>
//                 <View style={styles.mainContainer}>
//                     <ActivityIndicator size="large" color={props.loadingColor}/>
//                 </View>

//             </TouchableWithoutFeedback>
//         </Modal>
//     );
// };

// const styles = {
//     mainContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(0,0,0,0.2)',
//     },
// };

// ApiLoader.propTypes = {
//     visibility: PropTypes.bool,
//     onCancelPress: PropTypes.func,
//     loadingColor: PropTypes.string,
// };

// ApiLoader.defaultProps = {};

// export default ApiLoader;
