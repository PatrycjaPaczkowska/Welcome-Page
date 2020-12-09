//In this section I used Context and other Hooks
import React, { createContext, useEffect, useReducer } from 'react';

export const Context = createContext();

const ADD = 'ADD';
const FETCH = 'FETCH';

//Init value
let allValue = {
   aim: '',
   moneyToSave: null,
   money: null,
   moneyOnWallet: null,
   remains: null,
   showForm: true,
}

const changeStatus = (info, action) => {
   const { aim, moneyToSave, money, moneyOnWallet, remains, showForm } = action.info;
  
   return allValue = {
      aim,
      moneyToSave,
      money,
      moneyOnWallet,
      remains,
      showForm,
   }
}

const AppProvider = ({ children }) => {
   //Reducer
   const moneyReducer = (info, action) => {

      switch (action.type) {
         case ADD:
            return changeStatus(info, action);
         case FETCH:
            return action.data;
         default:
            throw new Error("No action was found in moneyReducer")
      }
   }

   const [info, dispatch] = useReducer(moneyReducer, []);

   //Download value
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