import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import './Register.css'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


const Register = () => {
    const { user, providerLogin, createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState(null)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/courses')
            })
            .catch(error => setError('User already exist !'))

    }



    const handleGoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)

                if (user?.uid) {
                    navigate('/courses')
                }
                else {
                    navigate('/')
                }
            })
            .catch(error => console.error(error))
    }

    const handleGithub = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                if (user?.uid) {
                    navigate('/courses')
                }
                else {
                    navigate('/')
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='mx-auto mt-5 registerStyle mb-5'>
            <Form onSubmit={handleSubmit} className='container'>
                <h2 className='text-center mb-5 fw-bold'>📝 Register Here</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Full Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your full name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your PhotoURL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Enter your photoURL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter your password" required />
                </Form.Group>

                <div className='text-center text-danger fs-4 fw-bold'>{error}</div>

                <div className='mt-5 d-flex justify-content-center'>
                    <Button className='w-75' variant="primary" type="submit">
                        <span className='fs-5 fw-bold'>Register</span>
                    </Button>
                </div>

                <h3 className='text-center mt-4 fw-bold'>Or</h3>

                <div className='mt-3 d-flex flex-column'>
                    <Button onClick={handleGoogle} className='btn btn-success mb-3 fw-bold border border-3 border-dark'><FaGoogle /> Sign in with Google</Button>
                    <Button onClick={handleGithub} className='btn btn-warning mb-3 fw-bold border border-3 border-dark'><FaGithub /> Sign in with GitHub</Button>
                </div>
                <h5 className='mt-5 text-center'>Already have an account? <Link to='/login' className='text-decoration-none text-primary fw-bold'>Login</Link> from here!</h5>
            </Form>
        </div>
    );
};

export default Register;