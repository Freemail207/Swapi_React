/** Common */
import React from 'react';
import { useStyles } from './styles';
import classNames from 'classnames';


/** Icons */

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerRoot}>
        <div className={classes.logo}>Swapi</div>
        <div className={classes.linksContainer}>
            <div className={classes.link}>
                People
            </div>
            <div className={classes.link}>
                Planets
            </div>
            <div className={classes.link}>
                Planets
            </div>
            <div className={classes.link}>
                Planets
            </div>
        </div>
    </div>
  );
};

export default Header;
