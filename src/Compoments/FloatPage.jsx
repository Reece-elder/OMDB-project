import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const FloatPage = () => {
return(
    <Container className="pt-5">
        <h1>Float Page lol</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, ab suscipit, placeat quidem facere ipsam voluptas repellat error alias temporibus veniam. Eius commodi atque, earum corrupti pariatur minus nemo fuga.</p>
        <Link to ="/movieReq">
            <Button variant="primary" size="lg" block>Go to API!</Button>
        </Link>
    </Container>  
);
}
export default FloatPage;