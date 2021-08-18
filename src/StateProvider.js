import React, {useContext, createContext, useReducer} from 'react'
import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
