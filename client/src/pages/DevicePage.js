import React from 'react';
import { Container, Col, Row, Image, Card, Button } from 'react-bootstrap';

import bigStar from '../assets/bigStar.png';


const DevicePage = () => {
    const device = {id: 1, name:"Iphone 12 pro", price: 25000, rating: 5, img: 'https://avatars.mds.yandex.net/get-mpic/4076910/img_id4257786938655538831.png/orig'};
    const description = [
        {id: 1, title: 'Оперативная память', description: '5Gb'},
        {id: 2, title: 'Камера', description: '12Mp'},
        {id: 3, title: 'Процессор', description: 'Pentium 3'},
        {id: 4, title: 'Количество ядер', description: '2'},
        {id: 5, title: 'Аккумулятор', description: '4000'},
        {id: 6, title: 'Оперативная память', description: '5Gb'},
        {id: 7, title: 'Камера', description: '12Mp'},
        {id: 8, title: 'Процессор', description: 'Pentium 3'},
        {id: 9, title: 'Количество ядер', description: '2'},
        {id: 10, title: 'Аккумулятор', description: '4000'},
    ];

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
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
                        <Button variant={"outline-dark"} >Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>       
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'trasparent', padding: 10}} >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>     
        </Container>
    );
};

export default DevicePage;