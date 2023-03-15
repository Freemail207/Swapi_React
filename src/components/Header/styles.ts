import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  headerRoot: {
    maxHeight: 75,
    boxShadow: ['0px', '2px', '13px', 'rgba(30, 30, 123, 0.065696)'],
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '3px solid orange',
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  logo: {
    fontSize: 48,
    fontFamily: 'StarWars',
    color: 'orange'
  },
  linksContainer: {
    display: 'flex',
  },
  link: {},
});
