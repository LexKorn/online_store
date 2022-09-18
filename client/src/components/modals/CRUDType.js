import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

import {createType, deleteType} from '../../http/deviceAPI';


const CRUDType = ({show, onHide}) => {
    const [value, setValue] = useState('');

    const addType = () => {
        createType({name: value}).then(data => {
            setValue('');
            onHide();
        });
    };

    const removeType = () => {
        deleteType(value).then(data => {
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
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-secondary"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addType}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={removeType}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CRUDType;