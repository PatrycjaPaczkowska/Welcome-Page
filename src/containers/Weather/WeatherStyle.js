import styled from 'styled-components';
import { spaceL, spaceS } from '../../style/variablesStyle';

export const WeatherContainer = styled.section`
   width: 100vw;
   overflow: hidden;
`

export const Form = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: ${spaceL};

   & > input {
      height: 40px;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid white;
      color: white;
}`;

export const ResultContainer = styled.section`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   margin-top: ${spaceL};
   padding:  ${spaceL};
`;

export const ParagraphStyle = styled.section`
   font-size: 0.9rem;
`;

export const ImageStyle = styled.img`
   transform: scale(160%);
`;

export const PStyle = styled.p`
   text-transform: capitalize;
   font-weight: 100;
   `;