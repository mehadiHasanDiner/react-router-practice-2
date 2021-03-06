import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './Country.css';
import { Link } from 'react-router-dom';


const Country = (props) => {
    const { name, flag, alpha3Code } = props.country;
    return (
        <div>
            <Card className ="country-style mt-5" style={{ width: '18rem', height: '28rem', margin: '20px' }}>
                <Card.Img className ="img-fluid img-thumbnail"  variant="top" src={flag} />
                <Card.Body>
                    <Card.Title>Card Title : {name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                            </Card.Text>
                            <p> <Link to ={`/countryDetail/${name}`}> Sort Code : {alpha3Code}</Link></p>
                    <Button variant="primary">See Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Country;