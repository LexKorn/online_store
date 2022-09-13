import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

import star from '../assets/star.png';


const DeviceItem = ({device}) => {
    return (
        <Col md={3}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={device.img} />
                <div className="d-flex mt-1 justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;