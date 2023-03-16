import React, {useState} from "react";
import { useStyles } from './Films.styles';
import { useDispatch, useSelector } from 'react-redux';
/** Films */
import * as filmsActions from '@store/films/actions';
import PageContainer from "@components/PageContainer";
import {getFilmsListState, getFilmsState} from "@store/selectors";
import ItemContainer from "@components/ItemContainer";


const Films = () => {
    const classes = useStyles();
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();
    const filmsList = useSelector(getFilmsListState);
    const loadFilms = () => {
        setPending(true);
        dispatch(
            filmsActions.fetchFilmsInfo({
                onSuccess: (response: any) => {
                    setPending(false);
                },
            })
        );
    };
    React.useEffect(() => {
        /** Fetch data */
        loadFilms();
    }, []);
    return (
        <PageContainer>
            <div className={classes.filmRoot}>
                {filmsList?.map((item, index)=>(<ItemContainer item={item} key={item.episode_id}/>))}
            </div>
        </PageContainer>
    );
}
export default Films;

