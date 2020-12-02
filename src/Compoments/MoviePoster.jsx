import React from 'react';
import { Card } from 'react-bootstrap';
const MoviePoster = ({poster}) => {
return(  
    <Card className= "justify-content-md-center">
        <Card.Img src={poster} alt="Card image" style={{ width: '70%' }}/>
    </Card>
);
}
export default MoviePoster;