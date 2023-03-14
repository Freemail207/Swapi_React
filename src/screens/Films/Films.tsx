import React, {useState} from "react";
import { useStyles } from './Films.styles';
import { useDispatch, useSelector } from 'react-redux';
/** Films */
import * as filmsActions from '@store/films/actions';


const Films = () => {
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
        <div className={classes.root} style={{backgroundColor: pending ? 'green' : "red"}}>
            Films
        </div>
    );
}
export default Films;
