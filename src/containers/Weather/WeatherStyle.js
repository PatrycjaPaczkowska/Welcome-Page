import styled from 'styled-components';
import { fontS, fontXS, spaceL, spaceM, spaceXL } from '../../style/variablesStyle';

export const WeatherContainer = styled.section`
   width: 100vw;
   overflow: hidden;

   @media(min-width: 1024px){
      position: absolute;
      width: auto;
      top: 0;
      right: 0;
      margin: 5px 5px 0 0;
   }
`;

export const Form = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 ${spaceL} ${spaceXL};

   @media(min-width: 1024px){
      margin: 0;
   }

   & > input {
      max-width: 120px;
      height: ${spaceXL};
      background-color: transparent;
      border: none;
      border-bottom: 2px solid white;
      color: white;
}`;

export const ResultContainer = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: ${spaceM} ${spaceL};
   margin:  0  0 ${spaceL};
   border-radius: 5px;
   background-color: #ffffff1a;

  @media(min-width: 1024px){
      margin: 0 0;
      background: none;
   }
`;

export const ParagraphStyle = styled.section`
   margin-left: ${spaceM};
   font-size: ${fontS};
`;

export const ImageStyle = styled.img`
   max-width: 50px;
   transform: scale(160%);
`;

export const PStyle = styled.p`
   text-transform: capitalize;
   font-weight: 100;
`;

export const ImageContainer = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-right: ${spaceM};
`;

export const ErrorInfo = styled.p`
   display: block;
   align-self: center;
   margin: 0 0 20px;
   font-size: ${fontXS};
   color: yellow;
   text-align: center;

   @media(min-width: 1024px){
      max-width: 80%; 
   }
`;