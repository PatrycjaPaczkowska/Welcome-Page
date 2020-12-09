//In this section 
//1. I used destructuring of props 
//2. I used Conditional (ternary) operator
import React from 'react';
import { ResultContainer, ImageStyle, ParagraphStyle, PStyle } from '../WeatherStyle';

const Result = ({ err, city, date, temp, pressure, description, value, icon }) => {
   let content = null;

   //Add icon code to the link
   const iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";

   if (!err && city) {
      content = (
         <ResultContainer>
            <ImageStyle src={iconSrc} alt={description} />
            <ParagraphStyle>
               <PStyle>{city}, {date}</PStyle>
               <PStyle>{temp}<sup>o</sup>C, {pressure} hPa</PStyle>
               <PStyle>{description}</PStyle>
            </ParagraphStyle>
         </ResultContainer>
      )
   }
   const text = value ? `We don't have in our base city of name: ${value}` : `You must write the city`;
   return (
      <>
         {err ? <p className="">{text}</p> : content}
      </>
   );
}

export default Result;