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


const Form = () => {
   // eslint-disable-next-line
   const { info, dispatch } = useContext(Context);

   const [newAim, setNewAim] = useState("");
   const [moneyToSave, setMoneyToSave] = useState("");
   const [showForm, setShowForm] = useState(true);
   const [errorinfo, setErrorInfo] = useState("");

   let validAim = false;
   let validMoney = false;

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

   const validationForm = () => {
      validAim = newAim.length > 2 ? true : false;
      validMoney = moneyToSave > 0 ? true : false;

      if (!validAim && !validMoney) {
         setErrorInfo("Check that the destination name has a minimum of 3 characters and contains letters and whether the cost is at least $1");
      } else if (!validMoney) {
         setErrorInfo("Check if the amount is at least 1$ ");
      } else if (!validAim) {
         setErrorInfo("Check that the destination name has a minimum of 3 characters and contains letters ")
      }
      return validAim && validMoney;
   }

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
      }


      dispatch({
         info,
         type: 'ADD'
      })
      setNewAim("");
      setMoneyToSave("");
      setShowForm(false);
      setErrorInfo("");

   }

   const handleShowForm = () => {
      setShowForm(true);
      let info = {
         aim: '',
         moneyToSave: 0,
         money: 0,
         moneyOnWallet: 0,
         remains: 0,
      }
      dispatch({
         info,
         type: 'ADD'
      })
   };

   const styleForm = {
      display: showForm ? 'block' : 'none',
     
   }

   const showButton = showForm ? null : <StyledButton onClick={handleShowForm}>New Aim</StyledButton>;

const errorInfoParagraph = <p className="App__Savings--errors">{errorinfo}</p>;

   return (
      <div className="App__Savings--aim">

         <form style={styleForm}>
            <p>Please, write what's your aim:</p>
            <input
               className="App__Savings--aim--input"
               type="text"
               value={newAim}
               name="newAim"
               onChange={handleValueFromInput} />

            <p className="App__Savings--aim--label">and how much it costs:</p>
            <input
               className="App__Savings--aim--input"
               type="number"
               name="moneyToSave"
               value={moneyToSave}
               onChange={handleValueFromInput}
               min="1" /> $

            <StyledButton
               className="App__Savings--aim--button"
               onClick={saveForm}>
               Let's go!
            </StyledButton>
         </form>
         {showButton}
         {errorInfoParagraph}
      </div>

   );
}

export default Form;