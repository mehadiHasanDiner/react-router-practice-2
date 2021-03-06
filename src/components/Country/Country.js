import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './Country.css';


const Country = (props) => {
    const { name, flag } = props.country;
    return (
        <div className ="country-style">
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>Card Title : {name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Country;