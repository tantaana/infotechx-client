import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Home.css'
import CardGroup from 'react-bootstrap/CardGroup';
import tech1 from '../../assets/tech1.jpeg'
import tech2 from '../../assets/tech2.jpg'
import tech3 from '../../assets/tech3.jpg'

const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <div className='container'>
            <Carousel className='mt-5' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Paid and free online courses !</h1>
                        <p>We provide the best online paid courses !</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className='text-warning'>Don't waste your time finding the best course</h2>
                        <p className='text-warning'>We have organized courses according to your choice</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Click on courses, pay and start your class !</h2>
                        <p>The easiest way to start learing</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className='mt-5'>
                <h1 className='text-center'>Welcome to <span className='text-danger'>InfoTech</span><span className='text-primary'>X</span></h1>
            </div>

            <div className='mt-5'>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={tech1} />
                        <Card.Body>
                            <Card.Title>Information is here !</Card.Title>
                            <Card.Text>
                                The world is revolunizing. In order to cope, we have to be updated with everything.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={tech2} />
                        <Card.Body>
                            <Card.Title>Get the best out of the market!</Card.Title>
                            <Card.Text>
                                We here provide the best online courses to you for a small amount of money
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={tech3} />
                        <Card.Body>
                            <Card.Title>Get Pleased</Card.Title>
                            <Card.Text>
                                We not only run our business but also focus to make our client happy
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Home;