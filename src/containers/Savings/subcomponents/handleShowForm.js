import { useContext } from 'react';
import { Context } from '../Context'; 
 // Toggle visibility Form and reset variables
 const { info, dispatch } = useContext(Context);

 export const handleShowForm = () => {
   let info = {
      aim: '',
      moneyToSave: 0,
      money: 0,
      moneyOnWallet: 0,
      remains: 0,
      showForm: true,
   }
   dispatch({
      info,
      type: 'ADD'
   })
};