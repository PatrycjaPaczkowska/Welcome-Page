import React, { useState } from 'react';
import SimpleCalculator from './SimpleCalculator/SimpleCalculator';
import CurrencyCalculator from './CurrencyCalculator/CurrencyCalculator';
//STYLES
import ButtonWhite from '../../style/ButtonWhite';
import { CalculatorsStyle, ButtonsStyle, Hr } from './CalculatorsStyle';
import { Title } from '../Savings/SavingsStyle';

const Calculators = () => {

   const [defaultCalc, setDefaultCalc] = useState(false);
   const [currencyCalc, setCurrencyCalc] = useState(false);

   const handleDefault = () => {
      if (currencyCalc) {
         setCurrencyCalc(false);
         setDefaultCalc(true);
      } else {
         setDefaultCalc(true);
      }
   }

   const handleCurrency = () => {
      if (defaultCalc) {
         setDefaultCalc(false);
         setCurrencyCalc(true);
      } else {
         setCurrencyCalc(true);
      }

   }
   const closeAllCalc = () => {
      setDefaultCalc(false);
      setCurrencyCalc(false);
   }

  const showDefaultCalc = defaultCalc ? <SimpleCalculator /> : null;
  const showCurrencyCalc = currencyCalc ? <CurrencyCalculator /> : null;

   return (
      <CalculatorsStyle>
         <Title>CALCULATORS</Title>
         <ButtonsStyle>
            <ButtonWhite onClick={handleDefault}>Default Calculator</ButtonWhite>
            <ButtonWhite onClick={handleCurrency}>Currency Calculator</ButtonWhite>
            <ButtonWhite onClick={closeAllCalc}>Close</ButtonWhite>
         </ButtonsStyle>

         {showCurrencyCalc}
         {showDefaultCalc}
       
      </CalculatorsStyle>
   );
}

export default Calculators;