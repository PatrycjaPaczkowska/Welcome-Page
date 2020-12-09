import styled from 'styled-components';
import { spaceL, textMainColor, spaceS} from './variablesStyle';

export const Input = styled.input`
 
   font-family: 'Commissioner', sans-serif;

   width: ${props => props.fullSize ? '100%' : '80%'};
   padding: ${spaceS};
   margin: ${props => props.marginTwenty ? `${spaceL} 0` : '0 auto'};
   border: none;
   border-bottom: 1px solid white;
   border-radius: 2px;

   background: transparent;
   color: ${textMainColor};
`