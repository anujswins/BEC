import React from 'react';
import {ActivityIndicator, Modal, TouchableWithoutFeedback, View} from 'react-native';
import PropTypes from 'prop-types';

const ApiLoader = (props) => {
    return (
        <Modal
            visible={props.visibility}
            transparent={true}
            onBackdropPress={() => props.onCancelPress()}
            animationType={'fade'}
            onRequestClose={() => props.onCancelPress()}>
            <TouchableWithoutFeedback onPress={() => props.onCancelPress()}>
                <View style={styles.mainContainer}>
                    <ActivityIndicator size="large" color={props.loadingColor}/>
                </View>

            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = {
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
};

ApiLoader.propTypes = {
    visibility: PropTypes.bool,
    onCancelPress: PropTypes.func,
    loadingColor: PropTypes.string,
};

ApiLoader.defaultProps = {};

export default ApiLoader;
