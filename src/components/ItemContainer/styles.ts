import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  itemRoot: {
    width: 212,
    height: 212,
    border: '2px solid #46bfef',
    borderRadius: 50,
    borderTopRightRadius: 10,
    fontSize: 16,
    color: 'white',
    paddingTop: 20,
    cursor: 'pointer',
    boxShadow: 'inset -1px 3px 8px 5px #1F87FF, 2px 5px 16px 0px #0B325E',
    '&:hover': {
      boxShadow: 'inset -1px 3px 8px 5px #62ff72, 2px 5px 16px 0px #62ff72',
      border: '2px solid #62ff72',
    }
  },
});
