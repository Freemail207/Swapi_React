import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  pageContainerRoot: {
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize: '100% 100%',
    backgroundImage: 'url("images/stars.jpg")',
    height: '100%',
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    minHeight: '100%',
    height: 'auto'
  },
});
