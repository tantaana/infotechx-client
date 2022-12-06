import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Information from '../../Information/Information';
import './CourseContent.css'

const CourseContent = () => {
    const courseContent = useLoaderData();
    console.log(courseContent)
    return (
        <div>
            <Container>
                <Row className='d-flex flex-column-reverse d-lg-flex flex-lg-row'>
                    <Col className='mt-5 mb-5' lg='8'>
                        <h2 className='text-center nameStyle'>Our Courses</h2>
                        <div className='contentStyle'>
                            {
                                courseContent.map(contents => <Information contents={contents}></Information>)
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

export default CourseContent;