import React from 'react';
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { deleteMemory, likeMemory } from '../../../actions/cardsActions.js';
import { useDispatch } from 'react-redux';
import './singleCardStyles.css';

const SingleCard = ({ onecard,setCurrentId }) => {
    const dispatch = useDispatch();
    return (
        <Card className="card">
            <CardMedia  className="media" image={onecard.selectedFile} title={onecard.title} />
            <div className="overlay">
                <Typography variant="h6">{onecard.creator}</Typography>
                <Typography variant="body2">{moment(onecard.createdAt).fromNow()}</Typography>
            </div>
            <div className="overlay2">
                <Button size='small' style={{color:'white'}} onClick={() => setCurrentId(onecard._id)}>
                    <MoreHoriz fontSize="default"/>
                </Button>
            </div>
            <div className="details">
                <Typography variant="body2" color="textSecondary">{onecard.tags.map((tag)=> `#${tag}`)}</Typography>
            </div>
            <Typography className="title" variant="h5" gutterBottom>{onecard.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary"component='p'>{onecard.message}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={() =>{dispatch(likeMemory(onecard._id))}}>
                    <ThumbUpAltIcon fontSize="small"/>
                    &nbsp;Like &nbsp;
                    {onecard.likes}
                </Button>
                <Button size="small" color="primary" onClick={() =>{dispatch(deleteMemory(onecard._id))}}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default SingleCard;