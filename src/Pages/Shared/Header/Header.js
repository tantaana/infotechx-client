import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Tooltip } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import { FaUserTie } from 'react-icons/fa';
import ImgHead from '../../../assets/header.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className=''>
                    <Navbar.Brand href='/' className='text-danger fs-2 fw-semibold'><img
                        alt=""
                        src={ImgHead}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                    />InfoTech<span className='text-primary'>X</span></Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='d-lg-flex justify-content-lg-end'>
                        <Nav>
                            <Nav.Link><Link className='links' to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link className='links' to='/courses'>Courses</Link></Nav.Link>
                            <Nav.Link><Link className='links' to='/faq'>FAQ</Link></Nav.Link>
                            <Nav.Link><Link className='links' to='/blog'>Blog</Link></Nav.Link>
                            <Nav className=''>
                                {user?.uid ? <div className='d-flex align-items-center justify-content-center mt-2 ms-5'>
                                    <h5 className='text-info me-3'>{user.displayName}</h5>
                                    <img className="rounded-circle me-3" data-toggle="tooltip" data-placement="bottom" title={user?.displayName} style={{ height: '40px' }} src={user.photoURL} />
                                    <Button onClick={handleLogOut} className='btn btn-danger'>Log Out</Button>
                                </div>
                                    :
                                    <>
                                        <div className='d-flex'>
                                            <h2><FaUserTie className='text-white me-4' /></h2>
                                            <Nav.Link><Link className='links' to='/login'><Button className='btn btn-primary'>Log in</Button></Link></Nav.Link>
                                            <Nav.Link><Link className='links' to='/register'><Button className='btn btn-warning'>Register</Button></Link></Nav.Link>
                                        </div>
                                    </>}
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;