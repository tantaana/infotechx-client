import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Content.css'

const Content = ({ info }) => {
    const { _id, title, author, details, image_url, total_view } = info;
    return (
        <div className='contents'>
            <Card>
                <Card.Img variant="top" src={image_url} className='img-fluid' />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{details.slice(0, 150) + '...'}</p>
                        <div className='d-flex justify-content-center'>
                            <Button variant='secondary'><Link to={`/news/${_id}`} className='text-light text-decoration-none'>✏️ Get Course</Link></Button>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Content;