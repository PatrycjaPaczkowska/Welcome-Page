import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const SmallButton = withStyles({
   root: {
      background: 'linear-gradient(45deg, #786443 30%, #4a3f2d 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      fontSize: '.5em',
      height: 20,
      padding: '0 20px',
      margin: '10px',
      boxShadow: '0 3px 5px 2px #1c1c1c1f',
   },
})(Button);


