import React, { useContext } from 'react';
import { Context } from './Context';
import ResultPanelInfo from './ResultPanelInfo';

const ResultPanel = () => {
   // eslint-disable-next-line
   const { info, dispatch } = useContext(Context);

   const showPanel = () => {

      const infoRemains = info.remains === 0;
      const infoAim = info.aim;
      let compToShow = <ResultPanelInfo />;

      if (infoRemains && infoAim) {
         compToShow = (
         <div className="App__Savings--congratulations">
         <p>Congratulations!</p>
         <p>Finally, you saved money for: {infoAim}</p></div>
         );
      }

      return compToShow;
   }
   return (
      showPanel()
   );
}

export default ResultPanel;