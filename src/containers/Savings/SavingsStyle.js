import styled from 'styled-components';
import { StructureOfBoxes } from '../../style/StructureOfBoxes';
import { spaceL } from '../../style/variablesStyle';

export const SavingsStyle = styled(StructureOfBoxes)`
   padding: 35px 0 0;
   font-weight: 200;
`;

//AimAndMoney.js

export const Title = styled.p`
   margin-bottom: 20px;
   text-align: center;
   font-size: 1.4rem;
   text-transform: uppercase;
`;

export const InfoStyle = styled.section`
   display: flex;
   align-items: center;
   justify-content:space-evenly;
	border: 1px solid white;
   border-radius: 6px;
   margin: 20px 0 40px; 
	padding: 20px;
	box-shadow: 0 3px 5px 2px #1c1c1c69;
   width: 85%;

   & > p {
      text-align: center;
      color: white;
      margin: 10px;
   }

   & > p:first-child {
      text-transform: capitalize;
      color: white;
   }
`;

//Form.js

export const FormStyle = styled.form`
   text-align: center;
   font-size: 1.2rem;

   & > p {
      margin-top: 20px;
   }

   & > input {
      font-size: 1.2rem;
   }
   & + span {
      display: block;
      margin: 20px 10px;
      color: yellow;
      font-size: 0.8rem;
      text-align: center;
      align-self: center;
   }
`;

//ResultPanelInfo.js

export const ResultPanelInfoStyle = styled.section`
   display: flex;
   justify-content: space-around;
   font-size: 1.2rem;
`;

export const SectionStyle = styled.section`
   margin: ${spaceL} 0;
`;

export const StyleP = styled.p`

`;

//InputToSaveMoney.js

export const InputToSaveComponent = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;

   & > span {
      display: block;
      margin: 20px 0;
      color: yellow;
      font-size: 0.8rem;
      text-align: center;
      align-self: center;
   }
`;

export const ButtonsSection = styled.section`
	display: flex;
   flex-direction: column;
`;

//ResultPanel.js

export const CongratulationsStyle = styled.section`
      display: flex;
      height: 200px;
      text-align: center;
      font-size: 1em;
      color: white;
      padding: 20px;
      flex-direction: column;
      justify-content: space-evenly;
      transition: .2s;

      & > p:first-child {
         color: #786141;
         font-size: 1.2em;
         text-shadow:0 0 2px #00000030;
      }
`;
