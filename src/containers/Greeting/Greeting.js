import React, { useState } from 'react';
//STYLES
import InputChangeTitle from './InputChangeTitle';
import { GreetingContainer, ChangeStyle } from './GreetingStyle';

const Greeting = () => {
   const defaultTitle = "Hi, how is your plan today?";
   const [isClickedButton, setClickedButton] = useState(false);
   const [textTitle, setTextTitle] = useState(defaultTitle);


   const handleChangeTitle = (newTitle) => {

      if (isClickedButton) {
         setTextTitle(newTitle);
      } else if (!isClickedButton) {
         setClickedButton(true);
         return;
      }
   };

   const closeInputChangeTitle = () => {
      setClickedButton(false);
   }

   const showInput = isClickedButton && <InputChangeTitle handleChangeTitle={handleChangeTitle} oldTitle={textTitle} close={closeInputChangeTitle} />;

   const toggleTextButton = isClickedButton ? null : <ChangeStyle onClick={handleChangeTitle}>Change greeting</ChangeStyle>;

   return (
      <GreetingContainer>
         <h1>{textTitle}</h1>
         {toggleTextButton}
         {showInput}
      </GreetingContainer>
   );
}

export default Greeting;