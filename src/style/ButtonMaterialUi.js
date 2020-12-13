import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const ButtonMaterialUi = withStyles({
   root: {
      background: 'linear-gradient(45deg, #786443 30%, #4a3f2d 90%)',
      borderRadius: 3,
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin: '20px 20px 0',
      boxShadow: '0 3px 5px 2px #1c1c1c1f',
      fontWeight: '400',
      border: '1px solid #ffffff29',
      width: '200px',
   },
})(Button);

