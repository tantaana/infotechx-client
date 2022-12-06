import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container mt-5'>
            <Card>
                <Card.Body className='design'>
                    <Card.Text>
                        <h2 className='text-primary'>Q1. What is cors?</h2>
                        <h2>Ans: CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. The same-origin security policy forbids cross-origin access to resources.</h2>
                    </Card.Text>
                    <Card.Text>
                        <h2 className='text-primary'>Q2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <h2>Ans: I'm using firebase because firebase help me develop high-quality apps, grow my user base, and earn more money. Each feature works independently, and they work even better together.<br />My React app requests a JWT from the authentication server whenever the user wants to sign on. The authentication server generates a JWT using a private key and then sends the JWT back to your React app. Your React app stores this JWT and sends it to your backend server whenever your user needs to make a request.</h2>
                    </Card.Text>
                    <Card.Text>
                        <h2 className='text-primary'>Q3. How does the private route work?</h2>
                        <h2>Ans: The react private route component renders child components. If the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</h2>
                    </Card.Text>
                    <Card.Text>
                        <h2 className='text-primary'>Q4. What is Node? How does it work?</h2>
                        <h2>Ans: Node is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</h2>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;