import React from 'react';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
const MovieData = ({title, year, rated, genre, plot, website, poster}) => {
return(
    <>
    <Card style={{ width: '55%' }}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{plot}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Year: {year}</ListGroupItem>
            <ListGroupItem>Rated: {rated}</ListGroupItem>
            <ListGroupItem>Genre: {genre}</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href={website}>{title} website</Card.Link>
            <Card.Link href="http://www.omdbapi.com/">OMDP Website</Card.Link>
        </Card.Body>
    </Card>
    </>  

    
);
}
export default MovieData;