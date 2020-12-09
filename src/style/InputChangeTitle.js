import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Input as InputStyle } from './Input';

const InputChangeTitle = ({ handleChangeTitle, oldTitle, close }) => {
   const [newTitle, setNewTitle] = useState(oldTitle);

   const handleOnChangeTitle = (e) => {
      setNewTitle(e.target.value);
   };

   handleChangeTitle(newTitle);

   
const StyledButton = withStyles({
   root: {
     background: 'linear-gradient(45deg, #786443 30%, #4a3f2d 90%)',
     borderRadius: 3,
     border: 0,
     color: 'white',
     fontSize: '.5em',
     height: 20,
     padding: '0 20px',
     margin: '10px',
     boxShadow: '0 3px 5px 2px r#1c1c1c1f',
   },
 })(Button);



   return (
      <>
         <InputStyle type="text" value={newTitle} onChange={handleOnChangeTitle} />
         <StyledButton onClick={close}>Close</StyledButton>
      </>);
}

export default InputChangeTitle;