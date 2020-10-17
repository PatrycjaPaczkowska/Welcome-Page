import React, { useContext } from 'react';
import { Context } from './Context';
import InputToSaveMoney from './InputToSaveMoney';


const ResultPanel = () => {
   // eslint-disable-next-line
   const { info, dispatch } = useContext(Context);

   const moneyOnWalletNumber = Number(info.moneyOnWallet);

   const style = {
      display: info.aim ? 'block' : 'none',
   }


   return (
      <div className="App__Savings--container" style={style}>
         <div className="App__Savings--panelsInfo">
            <div className="App__Savings--panelsInfo--panel">
               Saved money:
            <p className="App__Savings--panelsInfo--panel--number">{moneyOnWalletNumber} $</p>
            </div>
            <div className="App__Savings--panelsInfo--panel">
               It remains to the end:
               <p className="App__Savings--panelsInfo--panel--number">{info.remains} $</p></div>
         </div>
         <InputToSaveMoney />
      </div>
   );
}

export default ResultPanel;