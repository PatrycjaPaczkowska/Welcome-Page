import styled from 'styled-components';
import { StructureOfBoxes } from '../../style/StructureOfBoxes';
import { spaceL, spaceM, spaceXL } from '../../style/variablesStyle';

export const SavingsStyle = styled(StructureOfBoxes)`
   margin: 0;
   padding: 35px 0 0;
   font-weight: 200;
`;

//AimAndMoney.js
export const Title = styled.p`
   margin-bottom: ${spaceL};
   text-align: center;
   font-size: 1.4rem;
   text-transform: uppercase;
`;

export const InfoStyle = styled.section`
   display: flex;
   align-items: center;
   justify-content:space-evenly;
   width: 85%;
   max-width:400px;
   margin: ${spaceL} 0 ${spaceXL}; 
	padding: ${spaceL};
	border: 1px solid white;
   border-radius: 6px;
	box-shadow: 0 3px 5px 2px #1c1c1c69;

   & > p {
      margin: ${spaceM};
      text-align: center;
      color: white;
   }

   & > p:first-child {
      text-transform: capitalize;
      color: white;
   }
`;

//Form.js
export const FormStyle = styled.form`
   max-width: 400px;
   text-align: center;
   font-size: 1.2rem;

   & > p {
      margin-top: ${spaceL};
   }

   & > input {
      font-size: 1.2rem;
   }
   & + span {
      display: block;
      align-self: center;
      margin: ${spaceL} auto;
      max-width: 200px;
      color: yellow;
      font-size: 0.8rem;
      text-align: center;
   }
`;

//ResultPanelInfo.js
export const ResultPanelInfoStyle = styled.section`
   display: flex;
   justify-content: space-around;
   max-width: 400px;
   font-size: 1.2rem;
`;

export const SectionStyle = styled.section`
   margin: ${spaceL} 0;
`;

export const StyleP = styled.p`
   text-align: center;
`;

//InputToSaveMoney.js

export const InputToSaveComponent = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;

   & > span {
      display: block;
      align-self: center;
      margin: ${spaceL} 0;
      color: yellow;
      font-size: 0.8rem;
      text-align: center;
   }
`;

export const ButtonsSection = styled.section`
	display: flex;
   flex-direction: column;
   align-items: center;

   @media(min-width: 600px){
     flex-direction: row;
   }
`;

//ResultPanel.js

export const CongratulationsStyle = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   padding: ${spaceL};
   height: 200px;
   text-align: center;
   font-size: 1em;
   color: white;
   transition: .2s;

   & > p:first-child {
      font-size: 1.2em;
      text-shadow:0 0 2px #00000030;
   }
`;