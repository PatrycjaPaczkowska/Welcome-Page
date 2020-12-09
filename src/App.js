import React from 'react';
// COMPONENTS AND CONTAINERS
import Greeting from './containers/Greeting/Greeting';
import Calculators from './containers/Calculators/Calculators';
import Savings from './containers/Savings/Savings';
import Weather from './containers/Weather/Weather';
//STYLES
import { AppStyle } from './AppStyle';
import ButtonToTask from './style/ButtonToTask';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
   return (
      <AppStyle>
         <GlobalStyle />
      <Weather />
         <Greeting />
         <ButtonToTask />
         <div className="panels">
            <Savings />
            <Calculators />
         </div>
      </AppStyle>
   );
}


export default App;
