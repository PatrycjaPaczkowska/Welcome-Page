import React, { useContext, useState } from 'react';
import { ButtonMaterialUi } from '../../../style/ButtonMaterialUi';
import { Input } from '../../../style/Input';
import { Context } from '../Context';
import { InputToSaveComponent, ButtonsSection } from '../SavingsStyle';


const InputToSaveMoney = () => {
   const { info, dispatch } = useContext(Context);

   const [dollars, setDollars] = useState("");
   const [errorinfo, setErrorInfo] = useState("");

   const handleDollars = (e) => {
      setDollars(Number(e.target.value));
   }

   // Toggle visibility Form and reset variables
   const handleShowForm = () => {
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

   const handleSave = (e) => {
      e.preventDefault();

      if (dollars < 1) {
         setErrorInfo("Check if the amount is at least 1$ ")
         return;
      }
      else if (dollars > info.remains) {
         setErrorInfo(`The deposit can't contain letters and amount can't be larger than remains to the end`);
         return;
      }

      let remains = Number(info.remains) - Number(dollars);

      let moneyOnWallet = info.moneyOnWallet + Number(dollars);

      let newInfo = {
         aim: info.aim,
         moneyToSave: info.moneyToSave,
         moneyOnWallet,
         remains,
      }

      dispatch({
         info: newInfo,
         type: 'ADD'
      });

      setDollars("");
      setErrorInfo("");
   }

   const errorInfoParagraph = errorinfo ? <span>{errorinfo}</span> : null;

   return (
      <InputToSaveComponent noValidate>
         <Input
            fullSize
            marginTwenty
            type="number"
            name="dollars"
            value={dollars}
            onChange={handleDollars}
            placeholder="How many you saved today..."
            noValidate
         />

         <ButtonsSection>
            <ButtonMaterialUi margin="30px 10px" onClick={handleSave}>To Wallet!</ButtonMaterialUi>
            <ButtonMaterialUi onClick={handleShowForm}>New Aim</ButtonMaterialUi>
         </ButtonsSection>

         {errorInfoParagraph}
      </InputToSaveComponent>
   );
}

export default InputToSaveMoney;