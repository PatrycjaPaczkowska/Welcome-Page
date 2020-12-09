import React from 'react';
import { ButtonWrapper } from '../../CalculatorsStyle';

const Button = props => {
const isOperator = Boolean(props.operator);

   return (
      <ButtonWrapper
         operator={isOperator}
         onClick={() => props.handleClick(props.children)}
      >
         {props.children}
      </ButtonWrapper>
   );
}

export default Button;