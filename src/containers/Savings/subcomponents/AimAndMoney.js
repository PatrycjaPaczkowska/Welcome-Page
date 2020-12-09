import React, { useContext } from 'react';
import { Context } from '../Context';
import {Title, InfoStyle} from '../SavingsStyle';

const ShowInfoComponent = ({ aim, cost }) => {
   
   return (
      <InfoStyle>
         <p>{aim} </p> 
         |
         <p>{cost} $</p>
      </InfoStyle>
   )
};

const AimAndMoney = () => {
   // eslint-disable-next-line
   const { info, dispatch } = useContext(Context);

   const showInfo = info.aim ? <ShowInfoComponent aim={info.aim} cost={info.moneyToSave} /> : null;

   return (
      <>
         <Title>My savings</Title>
         {showInfo}
      </>
   );
}

export default AimAndMoney;