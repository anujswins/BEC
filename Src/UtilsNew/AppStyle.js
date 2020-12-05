import {StyleSheet} from 'react-native';
import Assets from './Assets/Assets';

const AppStyle = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: Assets.Color.blue,
    }, AuthHeaderContainer: {
        marginTop: 70,

    },
    primary: {
        borderLeftWidth: 3,
        borderLeftColor: Assets.Color.blue,
    },
    addNewInfoBox: {
        padding: 15,
        minHeight: 100,

    }, setAsPrimary: {
        paddingLeft: 20,
        paddingRight: 20,
        height: 60,
        borderTopColor: Assets.Color.borderRowContent,
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontSize: 16,
        lineHeight: 16,
        fontFamily: Assets.Fonts.Lato_Regular,
        color: Assets.Color.dark_gray,
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: Assets.Fonts.Lato_Regular,
        color: Assets.Color.dark_gray_400,
    },
    degree: {
        fontSize: 12,
        color: Assets.Color.blue,
        fontFamily: Assets.Fonts.Lato_Regular,
        lineHeight: 12,
        marginLeft: 2,
    },
    mainWraper: {
        paddingLeft: 15,
        paddingRight: 15,

    }, mainAppBodyTheme: {
        backgroundColor: '#f8f8fa',
    }, appFormWrapper: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 30,
    }, boxBody: {
        backgroundColor: Assets.Color.white,
        borderRadius: 5,
    }, elementInlineCenter: {
        alignSelf: 'flex-start',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    editBtn: {
        marginTop: 30,
        marginBottom: 30,
    },
    noDataMain: {
        justifyContent: 'center', alignItems: 'center', minHeight: 100,
    },
    noDataText: {
        fontSize: 16, fontFamily: Assets.Fonts.Lato_Regular, color: Assets.Color.inputTextColor, textAlign: 'center',
    },
    addDoctorBtn: {
        marginBottom: 20,
    }, diaryListItem: {
        padding: 10,
        flexDirection: 'row',
        borderRightWidth: 3,
        marginBottom: 10,
    }, diaryListItemCol: {
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        flexDirection: 'row',
    }, commonText: {
        fontSize: 14,
        color: Assets.Color.dark_gray,
        lineHeight: 18,
        fontFamily: Assets.Fonts.Lato_Regular,
        position: 'relative',
    }, calanderDate: {
        fontSize: 15,
        letterSpacing: 1,
        fontFamily: Assets.Fonts.Lato_Regular,
        color: Assets.Color.dark_gray,

    }, shadowCommon: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 3,
    }, shadowLight: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,
    },
    pageTitle: {
        fontSize: 18,
        lineHeight: 25,
        color: Assets.Color.dark_gray,
        fontFamily: Assets.Fonts.Lato_Bold,
        marginBottom: 20,
    },
    robotText: {
        fontSize: 17,
        fontFamily: Assets.Fonts.Lato_Light,
        color: Assets.Color.inputPlaceholderColor,
    }, screenBody: {
        flex: 1,
        backgroundColor: Assets.Color.background_white,
    }, text: {
        fontSize: 18,
        fontFamily: Assets.Fonts.Lato_Regular,
        marginTop: 10,
        color: Assets.Color.tabTextColor,
    },


});

export default AppStyle;
