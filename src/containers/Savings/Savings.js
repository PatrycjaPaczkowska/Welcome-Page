import React from 'react';
import AimAndMoney from './AimAndMoney';
import AppProvider from './Context';
import Form from './Form';
import ResultPanel from './ResultPanel';

const Savings = () => {
   return (
      <AppProvider>
         <div className="App__Savings">
            <AimAndMoney />
            <Form />
            <ResultPanel />
         </div>

      </AppProvider>
   );
}

export default Savings;