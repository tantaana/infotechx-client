import React from 'react';
import News from '../Courses/News/News';
import { Link, useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Checkout.css'

const Checkout = () => {
    const checkoutData = useLoaderData();
    const { _id, title, image_url, details, category_id, price, rating } = checkoutData;
    return (
        <div>
            <Container>
                <Row className='d-flex align-items-center mt-5'>
                    <Col lg="7">
                        <Card className='container mt-5 p-3 bg-check border-0'>
                            <Card.Img variant="top" src={image_url} className='img-fluid mt-2' />
                            <Card.Body>
                                <Card.Title className='title-card'><h2 className='text-center mb-5'>{title}</h2></Card.Title>
                                <div className='d-flex justify-content-between'>
                                    <h4><span className='fw-bold text-primary'>User Satisfaction:</span> {rating.badge}</h4>
                                    <h4>⭐⭐⭐ <span className='fw-bold'>{rating.number}</span></h4>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='border-0 p-4 buy-now' lg="5">
                        <h2 className='text-center mb-5'><u>Please proceed your order</u> 💲</h2>
                        <h4 className='mb-4'>Course Fee: <span className='text-danger fw-bold'>${price}.00</span></h4>
                        <h5>Course ID: {_id}</h5>
                        <div className='d-flex justify-content-center mt-5'>
                            <Button className='py-2 px-5 fw-semibold fs-5 w-50 me-3' variant='primary'>✌️ Confirm</Button>
                            <Button variant="danger" className='w-50 fs-5 fw-semibold'><Link className='text-light text-decoration-none' to={`/courses/${category_id}`}>Cancel</Link></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Checkout;