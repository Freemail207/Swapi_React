import React, {useState} from "react";
import { useStyles } from './Characters.styles';
import { useDispatch, useSelector } from 'react-redux';
/** Components */
import PageContainer from '@components/PageContainer'
/** Characters */
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
        <PageContainer>
            <div className={classes.root} style={{backgroundColor: pending ? 'green' : "red"}}>
                Characters
            </div>
        </PageContainer>
    );
}
export default Characters;

