import React, {useState} from "react";
import { useStyles } from './Films.styles';
import { useDispatch, useSelector } from 'react-redux';
/** Films */
import * as filmsActions from '@store/films/actions';


const Game = () => {
    const classes = useStyles();
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();
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
        <div className={classes.filmsRoot} style={{backgroundColor: pending ? 'green' : "red"}}>
            Game
        </div>
    );
}
export default Game;
