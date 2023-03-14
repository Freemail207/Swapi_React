import React, {useState} from "react";
import { useStyles } from './Characters.styles';
import { useDispatch, useSelector } from 'react-redux';
/** Films */
import * as charactersAction from '@store/characters/actions';


const Characters = () => {
    const classes = useStyles();
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();
    const loadCharacters = () => {
        setPending(true);
        dispatch(
            charactersAction.fetchCharactersInfo({
                onSuccess: (response: any) => {
                    setPending(false);
                },
            })
        );
    };
    React.useEffect(() => {
        /** Fetch data */
        loadCharacters();
    }, []);
    return (
        <div className={classes.root} style={{backgroundColor: pending ? 'green' : "red"}}>
            Characters
        </div>
    );
}
export default Characters;

