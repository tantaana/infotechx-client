import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';
import { useLoaderData } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
    const news = useLoaderData();
    return (
        <div>
            <Container>
                <Row className='d-flex flex-column-reverse d-lg-flex flex-lg-row'>
                    <Col className='my-5 courses' lg='8'>
                        <h2 className='text-center my-5 fw-bold'>Courses that we've picked for you 🚩</h2>
                        <div className='course-style'>
                            {
                                news.map(info => <Content key={info._id} info={info}></Content>)
                            }
                        </div>
                    </Col>
                    <Col className='mt-5' lg='4'>
                        <Sidebar></Sidebar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;