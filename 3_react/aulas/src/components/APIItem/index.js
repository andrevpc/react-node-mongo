import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Map from '../Map';

export default function ReqItemPage() {
    const { country } = useParams()
    const [countries, setCountries] = useState([])

    useEffect(() => {
        handleGet();
    }, []);

    async function handleGet() {
        const res = await axios.get(`https://restcountries.com/v3.1/all`);
        setCountries(res.data.filter(c => c.name.common === country))
    }


    const RenderList = () => {
        return countries.map(countries => {
            return (
                <>
                    <h1>{countries.name.common} - {countries.name.official}</h1>
                    <img style={{ maxWidth: "25rem", maxHeight: "25rem" }} variant="top" src={countries.flags.svg} />
                    <img style={{ maxWidth: "25rem", maxHeight: "25rem" }} variant="top" src={countries.coatOfArms.svg} />
                    <p>Capital: {countries.capital}</p>
                    <div style={{ width: "100vw" }}>
                        <Map position={countries.capitalInfo.latlng} />
                    </div>
                </>
            )
        })
    }

    useEffect(() => {
        console.log(countries)
    }, [countries])

    return (
        <Container className='content-products col-12' style={{ margin: 0, padding: 0 }}>
            < RenderList />
        </Container>
    )
}