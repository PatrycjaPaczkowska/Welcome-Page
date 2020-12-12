//In this section 
//1. I used destructuring of props 
//2. I used Conditional (ternary) operator
import React from 'react';
import { SmallButton } from '../../../style/SmallButton';
import { ImageContainer, ImageStyle, ParagraphStyle, PStyle, ResultContainer } from '../WeatherStyle';


const Result = ({ err, city, date, temp, pressure, description, value, icon, handleChange }) => {

   //Add icon code to the link
   const iconSrc = "http://openweathermap.org/img/w/" + icon + ".png";


   const content = (
      <ResultContainer>
         <ImageContainer>
            <ImageStyle src={iconSrc} alt={description} />
            <SmallButton onClick={handleChange}>Change</SmallButton>
         </ImageContainer>
         <ParagraphStyle>
            <PStyle>{city}, {date}</PStyle>
            <PStyle>{temp}<sup>o</sup>C, {pressure} hPa</PStyle>
            <PStyle>{description}</PStyle>
         </ParagraphStyle>
      </ResultContainer>
   )

   return (
      <>
         {city && content}
      </>
   );
}

export default Result;