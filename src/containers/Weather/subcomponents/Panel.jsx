//In this section 
//1. I used destructuring of props 
//2. Handling of the form

import React from 'react';
import ButtonWhite from '../../../style/ButtonWhite';
import { Form } from '../WeatherStyle';

const Panel = ({ city, handleChange, handleSubmit }) => {

   return (
      <Form>

         <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="n.p. Gdańsk"
         />

         <ButtonWhite onClick={handleSubmit}>Search</ButtonWhite>

      </Form>
   );
}



export default Panel;