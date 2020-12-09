import React from 'react';
import  { ClearBtn } from '../../CalculatorsStyle';

const ClearButton = (props) => {
   return ( 
      <ClearBtn onClick={props.handleClear}>
         {props.children}
      </ClearBtn>
    );
} 
 
export default ClearButton;