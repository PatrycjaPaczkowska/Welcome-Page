import React from 'react';
import Button from '@material-ui/core/Button';


const UsualButton = ({children}) => {
   return ( 
      <Button variant="outlined" color="primary">{children}</Button>
    );
}
 
export default UsualButton;