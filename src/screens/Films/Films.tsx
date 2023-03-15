import React, {useState} from "react";
import { useStyles } from './Films.styles';
import { useDispatch, useSelector } from 'react-redux';
/** Films */
import * as filmsActions from '@store/films/actions';
import PageContainer from "@components/PageContainer";


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
        <PageContainer>
            <div className={classes.filmRoot} style={{backgroundColor: pending ? 'green' : "red"}}>
                Films
            </div>
        </PageContainer>
    );
}
export default Films;

