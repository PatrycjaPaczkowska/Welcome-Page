import React, { useContext, useState } from 'react';
import { Context } from './Context';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const StyledButton = withStyles({
   root: {
      display: 'block',
     background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
     borderRadius: 3,
     border: 0,
     color: 'white',
     height: 48,
     padding: '0 30px',
     margin: '20px auto 0',
    
   },
   label: {
     textTransform: 'uppercase',
   },
 })(Button);

const InputToSaveMoney = () => {
   const { info, dispatch } = useContext(Context);

   const [dollars, setDollars] = useState("");
   const [errorinfo, setErrorInfo] = useState("");

   const handleDollars = (e) => {
      setDollars(e.target.value);
   }

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

      let moneyOnWallet = Number(info.money + dollars);

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

      setDollars(0);
      setErrorInfo("");
   }

const errorInfoParagraph = <p className="App__Savings--errors">{errorinfo}</p>
   return (
      <form className="App__Savings--InputToSaveComponent"
      noValidate>
         <input 
         className="App__Savings--InputToSaveComponent--inputToSaveMoney"
         type="number" 
         name="dollars" 
         value={dollars} 
         onChange={handleDollars} 
         min="1" 
         noValidate
         />
         <StyledButton onClick={handleSave}>Save!</StyledButton>
         {errorInfoParagraph}
      </form>
   );
}

export default InputToSaveMoney;