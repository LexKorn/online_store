import React, {useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import {Context} from '../index';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';


const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Купи Девайс</NavLink>
                {user.isAuth ?
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button 
                            variant={"outline-light"} 
                            onClick={() => history.push(ADMIN_ROUTE)}>
                                Админ панель
                        </Button>
                        <Button 
                            variant={"outline-light"} 
                            onClick={() => history.push(LOGIN_ROUTE)} 
                            className="ms-2">
                                Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ms-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }                
            </Container>
        </Navbar>
    );
});

export default NavBar;