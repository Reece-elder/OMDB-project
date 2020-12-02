import React from 'react';
import Container from 'react-bootstrap/Container'
import RequestForm from './RequestForm';
const MovieRequest = () => {

return(
    <>
        <Container className="pt-5">
            <h1>Movie Database</h1>
            <RequestForm/>
        </Container>
    </>
);
}
export default MovieRequest;