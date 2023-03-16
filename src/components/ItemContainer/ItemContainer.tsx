/** Common */
import React from 'react';
import { useStyles } from './styles';
import classNames from 'classnames';
import {ISingleFilm} from "@store/films/types";
import {toRomaniaNumber} from "@utilities";

/** Interfaces */
interface IProps {
  item: any,
}
const ItemContainer = (props: IProps) => {
  const classes = useStyles();
  const {item} = props;
return (
    <div className={classes.itemRoot}>
      <ul>
        <li>Episode: {toRomaniaNumber(item.episode_id)}</li>
        <li>Title: {item.title}</li>
        <li>Director: {item.director}</li>
        <li>Title: {item.title}</li>
      </ul>
    </div>
  );
};

export default ItemContainer;
