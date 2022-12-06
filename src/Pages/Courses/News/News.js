import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaCameraRetro } from "react-icons/fa";
import './News.css'
import Checkout from '../../Checkout/Checkout';
import Pdf from 'react-to-pdf';
import { ReactDOM } from 'react-dom';

const ref = React.createRef();

const News = () => {
    const news = useLoaderData();
    const { _id, title, image_url, details, category_id } = news;
    return (
        <div className='bg-news p-5' ref={ref}>
            <Card className='container mt-5 w-75'>
                <div className='mt-3 d-flex justify-content-between'>
                    <h2 className='text-primary'>Course Details</h2>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <Button onClick={toPdf} className='w-25 mb-5'><FaCameraRetro /> <span className='d-none d-lg-inline'>Convert page to PDF</span></Button>}</Pdf>

                </div>
                <div>
                    <Card.Img variant="top" src={image_url} className='img-fluid mt-2' />
                    <Card.Body className='border border-2' >
                        <Card.Title><h2 className='text-center mb-5'>{title}</h2></Card.Title>
                        <Card.Text>
                            <h6>{details}</h6>
                        </Card.Text>
                        <div className='d-flex justify-content-end'>
                            <Button variant="danger"><Link className='text-light text-decoration-none' to={`/courses/${category_id}`}>Back to courses</Link></Button>
                        </div>
                        <div className='mt-5 w-100 d-flex justify-content-center'>
                            <Button className='px-md-5 py-md-3' variant="success"><Link className='text-light text-decoration-none fw-bold fs-4' to={`/checkout/${_id}`}>🗝️ Get Premium Access</Link></Button>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default News;