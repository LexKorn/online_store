import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import TypeBar from '../components/TypeBar';


const ShopPage = () => {
    return (
        <Container>
            <Row>
                <Col md={2}>
                    <TypeBar/>
                </Col>
                <Col md={10}></Col>
            </Row>
        </Container>
    );
};

export default ShopPage;