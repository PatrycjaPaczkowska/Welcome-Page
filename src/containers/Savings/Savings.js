import React from 'react';

const Savings = () => {
   return (
      <div className="App__Savings">
         <p>Saving App</p>
         <div>
            <div className="panelOfSavings">
               <div>Zaoszczędzono:</div>
               <div>Pozostało</div>
            </div>
            <input type="text" />
            <input type="number"></input>
         </div>
      </div>
   );
}

export default Savings;