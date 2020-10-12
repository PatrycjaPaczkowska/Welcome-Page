import React, { useState } from 'react';
import InputChangeTitle from './InputChangeTitle';

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

   const showInput = isClickedButton && <InputChangeTitle handleChangeTitle={handleChangeTitle} oldTitle={textTitle} close={closeInputChangeTitle}/>;

   const toggleTextButton = isClickedButton ? null : <p className="App__greeting--button" onClick={handleChangeTitle}>Change greeting</p>;

   return (
      <div className="App__greeting">
         <h1 className="App__greeting--title">{textTitle}</h1>
         {toggleTextButton}
         {showInput}
      </div>
   );
}

export default Greeting;