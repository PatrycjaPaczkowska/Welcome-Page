import styled from 'styled-components';
import { StructureOfBoxes } from '../../style/StructureOfBoxes';
import { spaceXXL, spaceL, spaceM, spaceS, spaceXLL } from '../../style/variablesStyle';

// Calculators.js

export const CalculatorsStyle = styled(StructureOfBoxes)`
   font-weight: 200;
`

export const ButtonsStyle = styled.section`
   display: flex;
   flex-direction: column;
   align-content: center;
   align-items: center;
   justify-content: center;
   width: 100%;

   @media(min-width: 1024px){
      flex-direction: row;
   }
`;

export const Hr = styled.hr`
   align-self: center;
   margin: ${spaceL} 0;
   width: 80%;

   @media(min-width: 1024px){
      display: none;
   }
`;


// CurrencyCalc.js

export const CurrencySection = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-content: center;
   font-size: 1rem;
   text-align: center;
`;

export const FormStyle = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const LabelStyle = styled.label`
   margin-top: ${spaceL};
`;

export const OptionStyle = styled.option`
   &:focus {
      outline:0 !important;
      background: grey !important;
   }

   &:hover {
      outline:0 !important;
   }
`;

export const SelectStyle = styled.select`
   display: block;
	font-size: 16px;
	margin-top: ${spaceL};
	padding: .6em 1.4em .5em .8em;
	max-width: 100%;
	width: 100%;
	font-family: sans-serif;
	font-weight: 300;
	color: #444;
	line-height: 1.3;
	box-sizing: border-box;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;

   &:hover {
      border-color: #888;
   }

   &:focus {
      border-color: #aaa;
      box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
      box-shadow: 0 0 0 3px -moz-mac-focusring;
      color: #222;
      outline: none;
   }

`;

export const ResultSection = styled.section`
   display: flex;
   flex-direction: column;
   margin-top: ${spaceM};
`;

export const StyleP = styled.p`
   margin: ${spaceM} 0;
   font-size: 1.2rem;
`;

//SimpleCalc.js

export const SimpleSection = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 80vw;
   max-width: 300px;
   margin: ${spaceL} auto;
   border-radius: ${spaceS};
`;

export const RowStyle = styled.section`
   display: flex;
   width: 100%;
`;

export const ButtonWrapper = styled.section`
   height: ${spaceXXL};
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1;
   margin: 2px;
   font-weight: ligter;
   font-size: 1.4em;
   background-color: ${props => props.operator ? '#78644380' : '#fbfcff75'};
   color: white;
   cursor: pointer;
   border-radius: ${spaceS};
`;

export const ClearBtn = styled.section`
   display: flex;
   justify-content: center;
   flex: 1;
   align-items: center;
   height: ${spaceXLL};
   margin: ${spaceM} 2px;
   font-weight: lighter;
   font-size: 1em;
   background-color: #fbfcff75;
   color: white;
   border-radius: ${spaceS};
   box-shadow: 0 0 2px white;
   cursor: pointer;
`;

export const InputStyle = styled.section`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   margin-bottom: ${spaceM};
   padding: 0.5em;
   width: 100%;
   height: ${spaceXXL};
   font-weight: 400;
   font-size: 1.4rem;
   background-color: #7864436e;
   border-radius: ${spaceS};
   color: white;
   box-shadow: 0 0 2px white;
`;