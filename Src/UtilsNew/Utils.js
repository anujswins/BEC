import Toast from 'react-native-root-toast';
import {Alert, Text} from 'react-native';

import Assets from './Assets/Assets';
import {formatMMM_dashboard, formatMMM_Date_day, formatMMM_Year} from './DateUtils';
import moment from 'moment';
import AppStyle from './AppStyle';
import React from 'react';

const DEFAULTVALUE = 99999;

class Utils {


    static toast(msg) {
        let toast = Toast.show(msg, {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            onShow: () => {
            },
            onShown: () => {
            },
            onHide: () => {
                setTimeout(function () {
                    Toast.hide(toast);
                }, 1000);
            },
            onHidden: () => {
            },
        });
    }

    static showAlert() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
        );

    }


  

    static Last7Days() {
        let result = [];
        for (let i = 0; i < 7; i++) {
            let d = new Date();
            d.setDate(d.getDate() - i);
            result.push(new Date(d).setHours(0, 0, 0, 0));
        }
        console.log(result);

        return result;
    }

    static getxAxisyAxis = (yAxis) => {
        //   console.log("yAxis>>>>>>>>>>>", yAxis)
        let xAxisArray = [];
        let yAxisArray = [];
        for (let i in yAxis) {
            if (yAxis[i].value) {
                xAxisArray.push(yAxis[i].day);
                yAxisArray.push(yAxis[i].value);
            }
        }
        console.log('yAxis>>>>>>>>>>>', yAxis);
        console.log('xAxisArray>>>>>>>>>>>', xAxisArray);
        console.log('yAxisArray>>>>>>>>>>>', xAxisArray);
        return {xAxisArray, yAxisArray};

    };


    static getNextValue = (actualArray: Array, currentIndex: number) => {
        try {
            let nextValue = null;
            for (let i = currentIndex; i < actualArray.length; i++) {
                if (actualArray[i] != null && actualArray[i] > 0) {
                    nextValue = actualArray[i];
                    return nextValue;
                }
            }
        } catch (e) {
        }
        return DEFAULTVALUE;
    };

    static getPrevValue = (actualArray: Array, currentIndex: number) => {
        try {
            let nextValue = null;
            for (let i = currentIndex; i < 0; i--) {
                if (actualArray[i] != null && actualArray[i] > 0) {
                    nextValue = actualArray[i];
                    return nextValue;
                }
            }
        } catch (e) {
        }
        return DEFAULTVALUE;
    };


    static getGraphArray = (actualArray: Array) => {

        let hidePointIntegerArray = [];
        let resultArray = [];

        if (actualArray.length > 0 && actualArray != null) {
            for (let i = 0; i < actualArray.length; i++) {
                if (actualArray[i] != null && actualArray[i] > 0) {
                    resultArray.push(actualArray[i]);
                } else {
                    let prevValue = Utils.getPrevValue(actualArray, i);


                    // if(prevValue===null)
                    let nextValue = Utils.getNextValue(actualArray, i);
                    if (nextValue != null) {
                        if (prevValue === DEFAULTVALUE) {
                            prevValue = 0;
                        }
                        if (nextValue === DEFAULTVALUE) {
                            nextValue = 0;
                        }
                        let actualArrayValue = Math.round((prevValue + nextValue) / 2);
                        resultArray.push(actualArrayValue);
                        hidePointIntegerArray.push(i);
                    }

                }
            }
        }
        return {resultArray, hidePointIntegerArray};


    };

    static getArrayValue = (actualArray: Array, currentIndex: Number) => {

        let val1 = 0;
        let val2 = 0;
        if (actualArray[currentIndex] != null) {
            val1 = actualArray[currentIndex];
            return {Val: val1, isIndexHide: false};
        }
        if ((currentIndex + 1) <= actualArray.length && actualArray[currentIndex + 1] != null) {
            val1 = actualArray[currentIndex + 1];
        }

        if (val1 + val2 === 0) {
            return {Val: 0, isIndexHide: true};
        } else {
            return {Val: Math.round(((val1 + val2) / 2)), isIndexHide: true};

        }


    };

    static newArrayResult = (actualArray: Array) => {

        let hidePointIntegerArray = [];
        let resultArray = [];
        for (let i = 0; i < actualArray.length; i++) {
            let tempValue = Utils.getArrayValue(actualArray, i);
            let {Val, isIndexHide} = tempValue;
            if (isIndexHide) {
                hidePointIntegerArray.push(i);
            }
            resultArray.push(Val);
        }

        return {resultArray, hidePointIntegerArray};

    };

    static showUnitCurrentCompnent = (code) => {

        if (code === 'heartRate') {
            return ' BPM';
        }
        if (code === 'weight') {
            return 'lbs';
        }
        if (code === 'bloodSugar') {
            return 'mg/dL';
        }
        if (code === 'respiratoryRate') {
            return 'min';
        }
        if (code === 'sleepTime') {
            return ' hr';
        }
        return '';
    };


    static showBorderColor = (item) => {

        if (item.severity === 'mild') {
            return Assets.Color.lightGreen;
        }
        if (item.severity === 'moderate') {
            return Assets.Color.lightYellow;
        }
        if (item.severity === 'difficult') {
            return Assets.Color.lightOrange;
        }
        if (item.severity === 'severe') {
            return Assets.Color.lightRed;
        }
    };


    static getSeverity = (value) => {
        if (value === 0) {
            return 'mild';
        }
        if (value === 1) {
            return 'moderate';
        }
        if (value === 2) {
            return 'difficult';
        }
        if (value === 3) {
            return 'severe';
        }
        return 'mild';
    };

    static getSeveritySliderValue = (sliderValue) => {
        if (sliderValue === 'mild') {
            return 0;
        }
        if (sliderValue === 'moderate') {
            return 1;
        }
        if (sliderValue === 'difficult') {
            return 2;
        }
        if (sliderValue === 'severe') {
            return 3;
        }
        return 0;
    };

    static getEndDate = (endDate, sendEnddate) => {
        if (endDate === 'End Date') {
            return '';
        } else {
            return new Date(sendEnddate).getTime();
        }

    };
    static getEndTime = (endTime, checkEndTime) => {
        if (endTime === 'End Time') {
            return '';
        } else {
            return checkEndTime;
        }

    };

    static maxValue(code) {
        if (code === 'bodyTemperature') {
            return 40;
        }
        if (code === 'cholestrol') {
            return 400;
        } else {
            return 200;
        }
    }

    static findYear(item) {
        if (formatMMM_Year(item) === formatMMM_Year(new Date())) {
            return null;
        } else {
            return formatMMM_Year(item);
        }
    }

    static findDateYear(item) {
        if (formatMMM_Year(item) === formatMMM_Year(new Date())) {
            console.log('iffff');
            return formatMMM_Date_day(item);
        } else {
            console.log('elseeeee');
            return formatMMM_dashboard(item);
        }
    }

    static convertTime12to24 = (time12h) => {
        const [time, modifier] = time12h.split(' ');

        let [hours, minutes] = time.split(':');

        if (hours === '12') {
            hours = '00';
        }

        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }

        return `${hours}:${minutes}`;
    };

    static modeOfSererity() {
        return ['Mild', 'Moderate', 'Difficult', 'Severe'];
    }

    static timeSince(start, end, created, startTime, endTime) {
        const date1 = new Date(start);
        const date2 = end && end !== 0 ? new Date(end) : new Date();

        let endTimeTemp;
        if (endTime) {
            endTimeTemp = new Date(endTime).getTime();
        } else {
            endTimeTemp = new Date().getTime();
        }
        if (date1.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)) {
            let diff = (new Date(startTime).getTime() - endTimeTemp) / 1000;
            diff /= 60;
            let min = Math.abs(Math.round(diff));
            let hour = Math.abs(Math.round(min / 60));
            if (min > 0 && hour < 0) {
                return min + 'm';
            }
            if (hour > 0) {
                return hour + 'h';
            }
            return 'just now';
        }
        let year = this.getYearDiff(date2, date1);
        let month = this.getMonthDiff(date2, date1);
        let day = this.getDayDiff(date2, date1);
        if (year > 0) {
            return year + 'y';
        }
        if (month > 0 && year <= 0) {
            return month + 'mo';
        }
        if (day > 0 && month <= 0) {
            return day + 'd';
        }
    }

    static getYearDiff = (date2, date1) => {
        let diff = (date2.getTime() - date1.getTime()) / 1000;
        diff /= (60 * 60 * 24);
        return Math.abs(Math.round(diff / 365.25));

    };

    static getMonthDiff = (date2, date1) => {
        let months;
        months = (date2.getFullYear() - date1.getFullYear()) * 12;
        months -= date1.getMonth() + 1;
        months += date2.getMonth();
        return months <= 0 ? 0 : months;
    };

    static getDayDiff = (date2, date1) => {
        const diffTime = Math.abs(date2 - date1);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    static timeSince1(start, end, created) {

        let startTime = moment(created);
        let endTime = moment(new Date());
        let duration = moment.duration(endTime.diff(startTime));
        let days = endTime.diff(startTime, 'days');
        let hours = parseInt(duration.asHours());
        let minutes = parseInt(duration.asMinutes()) % 60;
        let seconds = parseInt(duration.asSeconds()) % 3600;
        if (minutes > 0 && hours <= 0) {
            return minutes + 'm';
        }
        if ((seconds => 0 || seconds < 0) && minutes <= 0) {
            return 'just now';
        }
        if (hours > 0 && hours < 24) {
            return hours + 'h';
        }
        if (days > 0) {
            return days + 'd';
        }
        console.log(
            hours + ' hour and ' + minutes + ' minutes.' + seconds + 'seconds',
        );
    }

    static getVitals() {
        return [
            {val: 'Vitals', id: 1, color: Assets.Color.blue},
            {
                val: 'Allergies',
                id: 2,
                color: Assets.Color.tabTextColor,
            },
            {val: 'Symptoms', id: 3, color: Assets.Color.tabTextColor},
            {
                val: 'Diagnosis',
                id: 4,
                color: Assets.Color.tabTextColor,
            },
            {
                val: 'Medications',
                id: 5,
                flex: 1,
                flexDirection: 'row',
                color: Assets.Color.tabTextColor,
            },
        ];

    }

    static getDayType() {
        return [
            {val: '7d', id: 1, color: Assets.Color.blue},
            {val: '1m', id: 2, color: Assets.Color.tabTextColor},
            {val: '6m', id: 3, color: Assets.Color.tabTextColor},
            {val: '1y', id: 4, color: Assets.Color.tabTextColor},
        ];

    }

    static hasPermisson(arr, index) {
        try {
            if (arr[index] == 1) {
                return true;
            }
        } catch (e) {
            return false;
        }

    }

    static showUnit(code, item) {
        if (code === 'height') {
            return `${item.feet}'${item.inches}"`;
        }
        if (code === 'bloodPressure') {
            return `${item.systolic}/${item.diastolic} mmHg`;
        }
        if (code === 'bodyTemperature') {
            return (<Text style={AppStyle.commonText}> {'\u2109'}</Text>);
        }
        if (code === 'heartRate') {
            return ' BPM';
        }
        if (code === 'weight') {
            return 'lbs';
        }
        if (code === 'bloodSugar') {
            return 'mg/dL';
        }
        if (code === 'respiratoryRate') {
            return '/min';
        }
        if (code === 'sleepTime') {
            return ' hr';
        }
        if (code === 'cholesterol') {
            return `HDL: ${item.hdl}${', '}LDL: ${item.ldl}${'\n'}Total: ${item.total}${', '}Triglycerides: ${item.triglycerides}`;
        }
    };

    static showUnitDeshBoard(data) {
        let code = data.item.vitalCode;
        if (code === 'bloodPressure' && data.item.diastolic) {
            return 'mmHg';
        }
        if (code === 'heartRate' && data.item.value) {
            return ' BPM';
        }
        if (code === 'weight') {
            return 'lbs';
        }
        if (code === 'bloodSugar') {
            return 'mg/dL';
        }
        if (code === 'respiratoryRate') {
            return '/min';
        }
        if (code === 'cholesterol') {
            return 'mg/dL';
        }
        if (code === 'sleepTime') {
            return ' hr';
        }
        if (code === 'bodyTemperature') {
            return (<Text style={AppStyle.commonText}> {'\u2109'}</Text>);
        }
        return '';
    };

    static gettwoDecimal=(val)=>{
        try {
            if (val.toString().includes('.')) {
                let arr = val.split('.');
                let frontVal = arr[0];
                let lastVal = '';
                if (arr.length > 0) {
                    if (arr[1].length > 0) {
                        lastVal = `.${arr[1].slice(0, 1)}`;
                    }
                }
                return `${frontVal}${lastVal}`
            }
            return `${val}`
        } catch (e) {
        }
        return val

    }



}

export default Utils;
