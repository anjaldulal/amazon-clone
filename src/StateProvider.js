import React, { createContext, useContext, useReducer } from 'react';

// Prepares the Data Layer
export const StateContext = createContext();

// Wrap our app and provides the Data Layer

export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
}

// Pull information from the data Layer
export const useStateValue = () => useContext(StateContext);
