import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Styles from "./styles.module.css";
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DarkModeContext } from '../../context/darkMode';
import useDark from "../../hooks/useDark";
import { useParams } from 'react-router-dom';

export default function ReqItemPage() {
    const { country } = useParams()
    const [countries, setCountries] = useState([])
    const [dark, darkMode] = useDark('dark', 'primary')
    const { isDarkMode } = useContext(DarkModeContext)

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
                    <p>Capital: { countries.capital }</p>
                </>
            )
        })
    }

    useEffect(() => {
        console.log(countries)
    }, [countries])

    return (
        <section>
            <Row className='content-products' style={{ margin: 0, padding: 0 }}>
                < RenderList />
            </Row>
        </section>
    )
}