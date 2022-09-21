import React, {useState, useEffect} from 'react';
import { Container, Col, Row, Image, Card, Button, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import bigStar from '../assets/bigStar.png';
import { fetchOneDevice } from '../http/deviceAPI';
import { addToBasket } from '../http/basketAPI';


const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchOneDevice(id)
            .then(data => setDevice(data))
            .finally(() => setLoading(false));
    }, []);

    const addDivToBask = () => {
        const formData = new FormData();
        formData.append('deviceId', id);
        addToBasket(formData).then(response => alert(`Товар ` + device.name + ` был добавлен в вашу корзину!`));
    };

    if (loading) {
        return <Spinner animation={"border"}/>
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} style={{objectFit:'contain'}} src={process.env.REACT_APP_API_URL + device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div 
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize:60}}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"} onClick={addDivToBask} >Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>       
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'trasparent', padding: 10}} >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>     
        </Container>
    );
};

export default DevicePage;