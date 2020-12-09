import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Commissioner', sans-serif;
   }

   input[type=number] {
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
   }

   input[type=number]::-webkit-inner-spin-button,
   input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }

`;