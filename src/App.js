import React from 'react';
import ButtonToTask from './components/ButtonToTask';
// COMPONENTS AND CONTAINERS
import Greeting from './components/Greeting';
import Calculators from './containers/Calculators/Calculators';
import Savings from './containers/Savings/Savings';
import Weather from './containers/Weather/Weather';
import './styles/main-styles.scss';

function App() {
   return (
      <div className="App">
         <Weather />
         <Greeting />
         <ButtonToTask />

         <div className="App__panels">
            <Savings />
            <Calculators />
         </div>

      </div>
   );
}

export default App;
