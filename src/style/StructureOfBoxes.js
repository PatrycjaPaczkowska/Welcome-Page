import styled from 'styled-components';
import { spaceL } from './variablesStyle';

export const StructureOfBoxes = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   align-items: center;
   
   font-size: 1.5rem;
   width: 100%;

   margin: ${spaceL} 0;
   padding: ${spaceL};

   transition: .1s;
`