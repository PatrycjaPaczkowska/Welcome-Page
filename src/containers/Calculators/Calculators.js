import React, { useState } from 'react';
import SimpleCalculator from '../Calculators/SimpleCalculator/SimpleCalculator';
import CurrencyCalculator from './CurrencyCalculator/CurrencyCalculator';

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
      <div className="App__Calculators">
         <div className="App__Calculators--buttons">
            <button className="App__Calculators--button" onClick={handleDefault}>Default Calculator</button>
            <button className="App__Calculators--button" onClick={handleCurrency}>Currency Calculator</button>
            <button className="App__Calculators--button" onClick={closeAllCalc}>Close</button>
         </div>
         {showCurrencyCalc}
         {showDefaultCalc}
      </div>
   );
}

export default Calculators;