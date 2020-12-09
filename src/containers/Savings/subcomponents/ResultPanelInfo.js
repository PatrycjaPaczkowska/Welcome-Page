import React, { useContext } from 'react';
import { Context } from '../Context';
import { ResultPanelInfoStyle, SectionStyle, StyleP } from '../SavingsStyle';
import InputToSaveMoney from './InputToSaveMoney';

const ResultPanel = () => {
   // eslint-disable-next-line
   const { info, dispatch } = useContext(Context);

   const moneyOnWalletNumber = Number(info.moneyOnWallet);

   const style = {
      display: info.aim ? 'block' : 'none',
      width: '85%',
   }

   return (
      <ResultPanelInfoStyle style={style}>
         <SectionStyle>
            <StyleP>
               On Wallet: <span> {moneyOnWalletNumber} $</span>
            </StyleP>
            <StyleP>
               Remains to the end: <span>{info.remains} $</span></StyleP>
         </SectionStyle>
         <InputToSaveMoney />
      </ResultPanelInfoStyle>
   );
}

export default ResultPanel;