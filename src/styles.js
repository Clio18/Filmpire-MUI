import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
  root: {
    displae: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
  },
}));
