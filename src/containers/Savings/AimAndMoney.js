import React, { useContext } from 'react';
import { Context } from './Context';

const AimAndMoney = () => {
// eslint-disable-next-line
   const { info, dispatch } = useContext(Context);

   const showInfo = info.aim ? <div className="App__Savings--title"><p>I'm saving up for: {info.aim} </p><p>The cost is: {info.moneyToSave}$ </p></div> : null;
   return (
      <>
         <p className="App__Savings--title">Saving App</p>
         {showInfo}
      </>
   );
}

export default AimAndMoney;