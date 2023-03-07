/**
 * El código define un slice de Redux llamado authSlice, que tiene un estado inicial que contiene la información 
 * de autenticación del usuario. El slice tiene tres reducers: login, logout y checkingCredentials. login actualiza 
 * el estado con la información de inicio de sesión del usuario, logout elimina la información de inicio de sesión 
 * y establece el estado en not-authenticated. checkingCredentials establece el estado en checking. 
 * El código también exporta las acciones login, logout y checkingCredentials.
 */

import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated'; //'not-authenticated', 'authenticated'
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload } ) => {
            state.status = 'not-authenticated'; //'not-authenticated', 'authenticated'
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;