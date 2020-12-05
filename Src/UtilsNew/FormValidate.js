import React from 'react';


export function isEmpty(val) {
    return (val.toString().trim().length <= 0 || val == null || val === undefined);
}


export function isLength(val) {
    return (val.toString().trim().length < 8);
}

export const validation = {
    email: {
        presence: {
            message: '^Please enter an email address',
        },
        email: {
            message: '^Please enter a valid email address',
        },
    },

    passwordc: {
        presence: {
            message: '^Please enter a password',
        },
        length: {
            minimum: 5,
            message: '^Password is required',
        },
    },
    password: {
        presence: {
            message: '^Please enter a password',
        },
        length: {
            minimum: 8,
            message: '^Your password must be at least 8 characters',
        },
    },
    confirmPassword: {
        // Do ou need to confirm your password?
        presence: true,
        length: {
            minimum: 8,
            message: '^Confirm password is required',
        },
    },
    code: {
        presence: true,
        length: {
            minimum: 3,
            message: '^Code is required',
        },
    },
    phone: {
        presence: true,
        length: {
            minimum: 3,
            message: '^Please enter a phone number',
        },
    },
    firstName: {
        presence: {
            message: '^Please enter first name',
        },
        length: {
            minimum: 3,
            message: '^First Name is required',
        },
    },
    lastName: {
        presence: {
            message: '^Please enter last name',
        },
        length: {
            minimum: 2,
            message: '^Last Name is required',
        },
    },
    gender: {
        presence: {
            message: '^Please enter gender',
        },
        length: {
            minimum: 3,
            message: '^Gender is required',
        },
    },
    birthday: {
        presence: {
            message: '^Please enter date of birth',
        },
        length: {
            minimum: 3,
            message: '^Date of birth  is required',
        },
    },
};

