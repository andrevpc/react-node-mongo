import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Styles from "./styles.module.css";
import Image from '../../components/Image';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DarkModeContext } from '../../context/darkMode';
import useDark from "../../hooks/useDark";

export default function ReqPage() {
    const [countries, setCountries] = useState([])

    const [dark, darkMode] = useDark('dark', 'primary')
    const { isDarkMode } = useContext(DarkModeContext)

    useEffect(() => {
        handleGet();
    }, []);

    async function handleGet() {
        const res = await axios.get(`https://restcountries.com/v3.1/all`);
        setCountries(res.data.slice(0, 50))
    }

    const RenderList = () => {
        return countries.map(countries => {
            return (
                <Col style={{ display: countries.coatOfArms.svg ? '' : 'none' }} id={Styles.colimg} md={2} sm={6} xs={12}>
                    <Card style={{ margin: "20px", width: '18rem', height: '19rem' }}>
                        <Card.Img style={{ maxWidth: "15rem", maxHeight: "15rem" }} variant="top" src={countries.flags.svg} />
                        <Card.Body>
                        </Card.Body>
                        <div style={{ margin: '10px' }}>
                            <Card.Title>{countries.name.common}</Card.Title>
                            <Button variant={isDarkMode ? 'dark' : 'primary'} style={{ width: '10rem' }} >Go somewhere</Button>
                        </div>
                    </Card>
                </Col>
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