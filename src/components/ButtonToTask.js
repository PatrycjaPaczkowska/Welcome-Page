import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const StyledButton = withStyles({
   root: {
     background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
     borderRadius: 3,
     border: 0,
     color: 'white',
     height: 48,
     padding: '0 30px',
     margin: '30px auto',
     boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
   },
   label: {
     textTransform: 'uppercase',
   },
 })(Button);


const ButtonToTask = () => {
   return (
      <>
      <StyledButton href="https://patrycjapaczkowska.github.io/To-do-application/" className="App_buttonToTask">
         Go to the tasks
      </StyledButton>
      </>
   );
}

export default ButtonToTask;