import React, { useContext } from 'react';
import { ButtonMaterialUi } from '../../../style/ButtonMaterialUi';
import { Context } from '../Context';
//STYLES
import { CongratulationsStyle } from '../SavingsStyle';
import ResultPanelInfo from './ResultPanelInfo';

const ResultPanel = () => {
   // eslint-disable-next-line
   const { info, dispatch } = useContext(Context);

   // Toggle visibility Form and reset variables
   const handleShowForm = () => {
      let info = {
         aim: '',
         moneyToSave: 0,
         money: 0,
         moneyOnWallet: 0,
         remains: 0,
         showForm: true,
      }
      dispatch({
         info,
         type: 'ADD'
      })
   };

   const showPanel = () => {

      const infoRemains = info.remains === 0;
      const infoAim = info.aim;
      let compToShow = <ResultPanelInfo />;

      if (infoRemains && infoAim) {
         compToShow = (
            <CongratulationsStyle>
               <p>Congratulations!</p>
               <p>Finally, you saved money for: {infoAim}</p>
               <ButtonMaterialUi onClick={handleShowForm}>New Aim</ButtonMaterialUi>
            </CongratulationsStyle>
         );
      }

      return compToShow;
   }
   return (
      showPanel()
   );
}

export default ResultPanel;