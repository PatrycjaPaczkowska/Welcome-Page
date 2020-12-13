import React, { useState } from 'react';
import { Input as InputStyle } from '../../style/Input';
import { SmallButton } from '../../style/SmallButton';

const InputChangeTitle = ({ handleChangeTitle, oldTitle, close }) => {
   const [newTitle, setNewTitle] = useState(oldTitle);

   const handleOnChangeTitle = (e) => {
      setNewTitle(e.target.value);
   };

   handleChangeTitle(newTitle);


   return (
      <>
         <InputStyle type="text" value={newTitle} onChange={handleOnChangeTitle} />
         <SmallButton onClick={close}>Close</SmallButton>
      </>);
}

export default InputChangeTitle;