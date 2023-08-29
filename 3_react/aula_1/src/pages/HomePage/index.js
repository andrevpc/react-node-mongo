import Image from '../../components/Image';
import { Col, Row } from 'react-bootstrap';
import Styles from "./styles.module.css";

export default function HomePage() {
    const list = []

    const renderList = () => {
        for (let index = 0; index < 10; index++) {
            list.push(
                <Col id={Styles.colimg} md={4} sm={6} xs={12}>
                    <div style={{ margin: "20px" }}>
                        <Image src={'https://blog.coffeemais.com/wp-content/uploads/2022/01/para-que-serve-o-cafe-interna.jpg'} />
                        <a>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </a>
                    </div>
                </Col>
            )
        }
    }
    renderList()
    return (
        <>
            <section>
                <Row className='content-products' style={{ margin: 0, padding: 0 }}>
                    { list }
                </Row>
            </section>
        </>
    )
}