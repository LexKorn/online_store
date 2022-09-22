import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/consts';


const DeviceItem = ({device}) => {
    const history = useHistory();
    // console.log(device);

    return (
        <Col md={3} className="mt-3 mb-4" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'} className="shadow">
                <Image width={150} height={150} style={{objectFit:'contain'}} src={process.env.REACT_APP_API_URL + device.img} />
                <div className="d-flex text-black-50 mt-1 justify-content-between align-items-center">
                    <div>{device.brandId}</div>
                    
                    {/* <div>{device.brands.filter(brand=> brand.id === device.brandId).name}</div> */}
                    {/* {device.brands.map(brand=> 
                        <div
                            style={`${brand.id === device.brandId ? 'line' : 'none'}`}
                            >{brand.name}
                        </div>
                        
                    )} */}

                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;