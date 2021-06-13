import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core'
import SingleCard from './singleCard/singleCard';
import './cardsStyles.css';

const Cards = ({currentId,setCurrentId}) => {
    const cards = useSelector((state) => state.CardsReducer);
    return (
        !cards.length ? <CircularProgress /> : (
            <Grid className="mainContainer" container alignItems="stretch" spacing={3}>
                {cards.map((onecard) => (
                    <Grid key={onecard._id} item xs={12} sm={6}>
                        <SingleCard onecard={ onecard } setCurrentId = {setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Cards;