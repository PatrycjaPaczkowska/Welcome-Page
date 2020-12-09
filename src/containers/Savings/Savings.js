import React from 'react';
//CONTEXT
import AppProvider from './Context';
//COMPONENTS
import AimAndMoney from './subcomponents/AimAndMoney';
import Form from './subcomponents/Form';
import ResultPanel from './subcomponents/ResultPanel';
import { SavingsStyle } from './SavingsStyle';

const Savings = () => {
   return (
      <AppProvider>
         <SavingsStyle>
            <AimAndMoney />
            <Form />
            <ResultPanel />
         </SavingsStyle>
      </AppProvider>
   );
}

export default Savings;