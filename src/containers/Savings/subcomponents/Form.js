import React, { useContext, useState } from 'react';
import { Context } from '../Context';
//STYLES
import { FormStyle } from '../SavingsStyle';
import { Input } from '../../../style/Input';
import { ButtonMaterialUi } from '../../../style/ButtonMaterialUi';

const Form = () => {
   // eslint-disable-next-line
   const { info, dispatch } = useContext(Context);
   // Value from form
   const [newAim, setNewAim] = useState("");
   const [moneyToSave, setMoneyToSave] = useState("");
   // Supporting variables
   const [errorinfo, setErrorInfo] = useState(""); 

   let validAim = false;
   let validMoney = false;

   // Handle value from form
   const handleValueFromInput = (e) => {
      const { name, value, type } = e.target;

      if (type === 'number' || type === 'text') {
         if (name === 'newAim') {
            setNewAim(value);
         } else if (name === 'moneyToSave') {
            setMoneyToSave(value);
         }
      }
   }

   // Validation both Inputs
   const validationForm = () => {

      validAim = newAim.length > 2 ? true : false;
      validMoney = moneyToSave > 0 ? true : false;

      const reg = new RegExp('[A-Za-z]');
      const validAimString = Boolean(newAim.search(reg));

      if (!validAim && !validMoney && validAimString) {
         setErrorInfo("Check that the destination name has a minimum of 3 characters and contains letters and whether the cost is at least $1");
      } else if (!validMoney) {
         setErrorInfo("Check if the amount is at least 1$ ");
      } else if (!validAim && validAimString) {
         setErrorInfo("Check that the destination name has a minimum of 3 characters and contains letters ")
      }

      return validAim && validMoney && !validAimString;
   }

   // Saving informations and sending to Context
   const saveForm = (e) => {
      e.preventDefault();

      let valid = false;
      valid = validationForm();

      if (!valid) return;

      let info = {
         aim: newAim,
         moneyToSave,
         money: 0,
         moneyOnWallet: 0,
         remains: moneyToSave,
         showForm: false,
      }

      dispatch({
         info,
         type: 'ADD'
      })

      //Reset variables
      setNewAim("");
      setMoneyToSave("");
      setErrorInfo("");

   }
   
   const styleForm = {
      display: info.showForm ? 'block' : 'none',
   }

   const errorInfoParagraph = <span>{errorinfo}</span>;

   return (
      <div>
         <FormStyle style={styleForm}>
            <p>Please, write what's your aim:</p>
            <Input
               type="text"
               value={newAim}
               name="newAim"
               onChange={handleValueFromInput} />

            <p>and how much $ it costs:</p>
            <Input
             type="number"
               name="moneyToSave"
               value={moneyToSave}
               onChange={handleValueFromInput}
               min="1" /> 

            <ButtonMaterialUi
               onClick={saveForm}>
               Let's go!
            </ButtonMaterialUi>
         </FormStyle>
         {errorInfoParagraph}
      </div>

   );
}



export default Form;