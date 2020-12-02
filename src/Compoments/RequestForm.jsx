import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Button, Card, CardDeck, CardGroup, Form } from 'react-bootstrap';
import MovieData from './MovieData';
import MoviePoster from './MoviePoster';
const RequestForm = () => {

    const [data, setData] = useState("");
    const [key, setKey] = useState("");
    const [id, setID] = useState("");
    const [title, setTitle] = useState("");
    const [error, setError] = useState(null);
    const [isLoaded, setLoaded] = useState(false);

    const updateKey = (e) => {
        e.preventDefault();
        setKey(e.target.value);
    }

    const updateTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    }

    const updateID = (e) => {
        e.preventDefault();
        setID(e.target.value);
    }

    const apiRequest =(e) => {
        axios.get("http://www.omdbapi.com/?apikey=" + key + "&t=" + title)
        .then((data) => {
            setLoaded(true);
            setData(data.data)
        }, (error) => {
            setLoaded(true);
            setError(true);
        })
    };

return(
    <>
        <Form>
            <Form.Group controlId="formBasicKey">
                <Form.Label>API Key: </Form.Label>
                <Form.Control type="text" placeholder="Enter API Key" onChange={(e)=>updateKey(e)} />
                <Form.Text className="text-muted">
                    Obtain your OMDB Api key from http://www.omdbapi.com/apikey.aspx.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicTitle">
                <Form.Label>Film Title: </Form.Label>
                <Form.Control type="text" placeholder="Enter Film Title" onChange={(e)=>updateTitle(e)} />
                <Form.Text className="text-muted">
                    Enter the film title of the film you want to search for.
                </Form.Text>
            </Form.Group>
        </Form>

        <Button onClick={(e) => apiRequest(e)} variant="primary" size="lg" block className="mb-4">
            Click me!
        </Button>

        <CardDeck>
            <MovieData 
            title={data.Title}
            year={data.Year}
            rated={data.Rated}
            genre={data.Genre}
            plot={data.Plot}
            website={data.Website}
            poster={data.Poster}/>
            <MoviePoster poster={data.Poster}/>
        </CardDeck>

    </>  
);
}
export default RequestForm;