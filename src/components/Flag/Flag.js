import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Flag = (props) => {
    const {flag, name} = props.countryDetail;
    return (
        <div >
            <img src={flag} alt=""/>
            <h1 className ="justify-content-center">Country Name : {name}</h1>
        </div>
    );
};

export default Flag;