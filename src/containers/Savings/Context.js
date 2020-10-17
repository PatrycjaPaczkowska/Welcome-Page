import React, { createContext, useEffect, useReducer } from 'react';


export const Context = createContext();

const ADD = 'ADD';
const FETCH = 'FETCH';


let allValue = {
   aim: '',
   moneyToSave: null,
   money: null,
   moneyOnWallet: null,
   remains: null
}

// let allValue = {
//    aim: 'książka',
//    moneyToSave: 50,
//    money: 0,
//    moneyOnWallet: 0,
//    remains: 50
// }

const changeStatus = (info, action) => {
    const {aim, moneyToSave, money, moneyOnWallet, remains } = action.info;
  
   return allValue = {
      aim,
      moneyToSave,
      money,
      moneyOnWallet,
      remains,
   }
}

const AppProvider = ({ children }) => {
   const moneyReducer = (info, action) => {

      switch (action.type) {
         case ADD:
            return changeStatus(info, action);
         case FETCH:
            return action.data;
         default:
            throw new Error("Nie znaleziono akcji w coursesReducer")
      }
   }

   const [info, dispatch] = useReducer(moneyReducer, []);

   useEffect(() => {
      dispatch({ type: FETCH, data: allValue })
   }, [])

   return (
      <Context.Provider value={{ info, dispatch }} >
         {children}
      </Context.Provider>
   )
}

export default AppProvider;