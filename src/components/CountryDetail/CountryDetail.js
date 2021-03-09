import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Flag from '../Flag/Flag';

const CountryDetail = () => {
    const [country, setCountry] = useState([])
    const {countryDetailID} = useParams();
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryDetailID}`;
        fetch(url)
        .then (res => res.json())
        .then (data => {
            // console.log(data);

            setCountry(data);
        });
    }, [countryDetailID])
    return (
        <div>
            <h3>Codl d f {countryDetailID} </h3>
            <h3>Codl d f {countryDetailID} </h3>
            <br/>
            {
                country.map(countryDetail => <Flag countryDetail = {countryDetail} key ={countryDetail.alpha3Code}></Flag>)
            }
        </div>
    );
};

export default CountryDetail;