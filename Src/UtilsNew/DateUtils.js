import moment from 'moment';

const formater3 = 'MMM D, YYYY';
const formater7 = 'YYYY';
const formater8 = 'MMM';
const formater9 = 'D';
const formater10 = 'MM-DD-YYYY';
const formater13 = 'hh:mma';
const formater14 = 'D MMM';
const formater15 = 'D MMM, YYYY';
const formater16 = 'MM-DD-YYYY';
const formater17 = 'HH:MM';

function checkInvalidDate(date) {
    return ((`${date}`.includes('Invalid') ? '' : date));
}

export function formatMMM_do_YYYY(timedateObj) {
    return checkInvalidDate(moment(timedateObj).format(formater3));
}

export function formatMMM_Year(timedateObj) {
    return checkInvalidDate(moment(timedateObj).format(formater7));
}

export function formatMMM_Month(timedateObj) {
    return checkInvalidDate(moment(timedateObj).format(formater8));
}

export function formatMMM_date(timedateObj) {
    return checkInvalidDate(moment(timedateObj).format(formater9));
}

export function formatMMM_YYYY(timedateObj) {
    return checkInvalidDate(moment(timedateObj).format(formater10));
}

export function formatMMM_time(timedateObj) {
    return checkInvalidDate(moment(timedateObj).format(formater13));
}

export function formatMMM_day(timedateObj) {
    return checkInvalidDate(moment(timedateObj).format(formater14));
}

export function formatMMM_Date_day(timedateObj) {
    return checkInvalidDate(moment(timedateObj).format(formater14));
}

export function formatMMM_dashboard(timedateObj) {
    return checkInvalidDate(moment(timedateObj).format(formater15));
}

export function formatMMM_birthday(timedateObj) {
    return checkInvalidDate(moment(timedateObj).format(formater16));
}

export function formatMMM_24Hours(timedateObj) {
    return checkInvalidDate(moment(timedateObj).format(formater17));
}
