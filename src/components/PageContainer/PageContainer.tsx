import React from 'react';
import Header from '@components/Header';
import { useStyles } from './styles';

const PageContainer = (props: any) => {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.pageContainerRoot}>
      <Header />
      <div className={classes.contentContainer}>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
