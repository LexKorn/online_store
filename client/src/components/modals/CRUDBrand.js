import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

import {createBrand, deleteBrand} from '../../http/deviceAPI';


const CRUDBrand = ({show, onHide}) => {
    const [value, setValue] = useState('');

    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('');
            onHide();
        });
    };

    const removeBrand = () => {
        deleteBrand(value).then(data => {
            setValue('');
            onHide();
        });
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            centered
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название бренда"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary "} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addBrand}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={removeBrand}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CRUDBrand;