import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import React, { useState } from 'react';

const InputChangeTitle = ({ handleChangeTitle, oldTitle, close }) => {
   const [newTitle, setNewTitle] = useState(oldTitle);

   const handleOnChangeTitle = (e) => {
      setNewTitle(e.target.value);
   };

   handleChangeTitle(newTitle);

   
const StyledButton = withStyles({
   root: {
     background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
     borderRadius: 3,
     border: 0,
     color: 'white',
     fontSize: '.5em',
     height: 20,
     padding: '0 20px',
     margin: '10px',
     boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
   },
   label: {
     textTransform: 'uppercase',
   },
 })(Button);



   return (
      <>
         <input className="App__greeting--input" type="text" value={newTitle} onChange={handleOnChangeTitle} />
         <StyledButton onClick={close}>Close</StyledButton>
      </>);
}

export default InputChangeTitle;