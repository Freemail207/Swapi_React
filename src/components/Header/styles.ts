import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    maxHeight: 75,
    boxShadow: ['0px', '2px', '13px', 'rgba(30, 30, 123, 0.065696)'],
    display: 'flex',
    backgroundColor: 'red',
    justifyContent: 'space-between'
  },
  leftPart: {
    display: 'flex',
  },
  rightPart: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 75,
    cursor: 'pointer'
  },
  userName: {
    marginLeft: 13,
  },
  logOutButton: {
    fontSize: '18px',
    paddingRight: 15,
    fontWeight: 600,
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  imgContainer: {
    marginLeft: 58,
    width: 290,
  },
  adminPanel: {
    borderLeft: [6, 'solid', 'orange'],
    height: 30,
    paddingLeft: 19,
    fontFamily: 'SpartanBold',
    fontSize: '22px',
    color: 'orange',
    lineHeight: '36px',
    marginTop: 28,
    marginBottom: 22,
    marginLeft: 5,
  },
  popup: {
    width: 218,
    height: 55,
    borderRadius: 9,
    backgroundColor: '#EEEEEE',
    position: 'absolute',
    top: 86,
    right: 27,
    zIndex: 100,
  },
  popupItem: {
    lineHeight: '53px',
    height: 53,
    paddingLeft: 23,
    paddingRight: 23,
    display: 'flex',
    justifyContent: 'flex-start',
    cursor: 'pointer',
  },
  popupIcon: {
    marginRight: 13,
    position: 'relative',
    top: 4,
  },
  border: {
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderBottom: [1, 'solid', 'rgba(19,19,19, 0.25)']
  },
});
