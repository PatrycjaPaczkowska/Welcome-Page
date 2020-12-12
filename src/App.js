import React from 'react';
//STYLES
import { AppStyle } from './AppStyle';
import Calculators from './containers/Calculators/Calculators';
// COMPONENTS AND CONTAINERS
import Greeting from './containers/Greeting/Greeting';
import Savings from './containers/Savings/Savings';
import Weather from './containers/Weather/Weather';
import ButtonToTask from './containers/Greeting/ButtonToTask';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
   return (
      <AppStyle>
         <GlobalStyle />
         <Greeting />
         <ButtonToTask />
         <div className="panels">
            <Savings />
            <Calculators />
         </div>
         <Weather />
      </AppStyle>
   );
}


export default App;
