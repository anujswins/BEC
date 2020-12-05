import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';
// import Assets from '../../Utils/Assets/Assets';
// import Icon from '../../Utils/VectorIcons';
import PropTypes from 'prop-types';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class EditText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            text: (this.props.value !== undefined && this.props.value.length > 0 ? this.props.value : ''),

        };
    }


    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        if (this.state.text !== nextProps.value) {
            this.setState({text: nextProps.value});
        }
    }


    animatedTitleStyle() {
        const {isFocused, text} = this.state;
        const isHaveData_isFouced = (`${text}`.trim().length > 0 );
        return {
            lineHeight: isHaveData_isFouced ? 20 : 50,
            marginTop: isHaveData_isFouced ? -5 : 0,
            color: isHaveData_isFouced ? 'gray' : 'gray',
            fontSize: isHaveData_isFouced ? hp('2%') : hp('3%'),

        };
    }


    handleFocus = () => {
        this.setState({isFocused: true});
    };

    handleonBlur = () => {
        // Keyboard.dismiss();
        this.setState({isFocused: false});
    };

    handleValueInput = (text) => {
        this.setState({text});
        this.props.onChangeText(text);

    };

    renderError = () => {
        const {isFocused} = this.state;
        const {error} = this.props;
        if (!isFocused && error) {
            return (
                <Text style={{color: 'green', marginTop: -5, marginBottom: 10, fontSize: 12}}>{error}</Text>
            );
        }


    };


    render() {
        const {isFocused, text} = this.state;
        const {IconName, renderUnit, styleInputText, styleUnit} = this.props;
        let containerBorder = (isFocused || text.length > 0) ? styles.inputFieldNotFocused : styles.inputFieldFocused;
        return (
            <View>
                <View style={[styles.container, containerBorder]}>
                    <View style={styles.Icon}>
                        {/* <Icon name={IconName} color='blue' size={20}/> */}
                    </View>
                    {renderUnit &&
                    <View style={[styles.appendRightText, styleUnit]}><Text style={styles.unitText}>{renderUnit}</Text></View>}

                    <TextInput
                        maxLength={this.props.maxLength || 50}
                        secureTextEntry={this.props.secureTextEntry}
                        keyboardType={this.props.keyboardType || 'default'}
                        placeholder={''}
                        editable={this.props.editable}
                        style={[styles.inputText, styleInputText]}
                        value={text}
                        returnKeyType={'done'}
                        autoCapitalize={this.props.autoCapitalize || 'sentences'}
                        onChangeText={(val) => this.handleValueInput(val)}
                        underlineColorAndroid={'transparent'}
                        autoCorrect={false}
                        onFocus={this.handleFocus}
                        onBlur={this.handleonBlur}

                    />
                    <Text style={[styles.placeHolder, this.animatedTitleStyle()]}>{this.props.placeholder}</Text>
                </View>

                {/*Form Errors should be displayed below the field instead of a toast*/}
                {this.renderError()}
            </View>
        );
    }
}

const styles = {
    container: {
        position: 'relative',
        width: wp('90%'),
        flexDirection: 'row',
        overflow: 'hidden',
        marginBottom: 15,
        height: 50,
    }, Icon: {
        position: 'absolute', left: 0, top: 15, zIndex: 10,
    }, inputText: {
        color: '#000',
        // fontFamily: Assets.Fonts.Lato_Light,
        fontSize: hp('2.7%'),
        lineHeight: 20,
        textAlign: 'left',
        // paddingLeft: 32,
        backgroundColor: 'transparent',
        width: '50%',
        height: '100%',
    }, placeHolder: {
        // fontFamily: Assets.Fonts.Lato_Light,
        textAlign: 'left',
        // marginLeft: 32,
        left: 0,
        right: 0,
        width: '70%',
        position: 'absolute',
        zIndex: -1,
    }, inputFieldNotFocused: {
        borderColor: '#008BD0',
        borderBottomWidth: 1,
    }, inputFieldFocused: {
        borderColor: 'gray',
        borderBottomWidth: 1,
    }, appendRightText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 0,
        paddingHorizontal: 5,
        height: '100%',
        zIndex: 1,
    }, unitText: {
        fontSize: 14,
        // fontFamily: Assets.Fonts.Lato_Regular,
        color: 'blue',
        lineHeight: 14,
    },
};


EditText.propTypes = {
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    maxLength: PropTypes.string,
    IconName: PropTypes.string,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    editable: PropTypes.bool,
    keyboardType: PropTypes.string,
    error: PropTypes.string,
    autoCapitalize: PropTypes.string,
    renderUnit: PropTypes.string,
    styleInputText: PropTypes.style,
    styleUnit: PropTypes.style,
};

EditText.defaultProps = {
    value: '',
    placeholder: '',
    autoCapitalize: 'sentences',
    secureTextEntry: false,
    // editable: true,
    maxLength: 50,
};

export default EditText;
