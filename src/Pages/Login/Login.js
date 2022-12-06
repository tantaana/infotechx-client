import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


const Login = () => {

    const { user, providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [error, setError] = useState(null)

    const from = location.state?.from?.pathname || '/courses'

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                if (user?.uid) {
                    navigate(from, { replace: true })

                }
                else {
                    navigate('/login')
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
                    navigate(from, { replace: true })
                }
                else {
                    navigate('/login')
                }
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
                return
            })
            .catch(error => setError('Invalid username or password'))
    }

    return (
        <div className='mx-auto mt-5 loginStyle mb-5'>
            <Form onSubmit={handleSubmit} className='container'>
                <h2 className='text-center mb-5 fw-bold'>🔐 Please Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter your password" />
                </Form.Group>

                <div className='fs-4 fw-bold text-danger text-center'>{error}</div>

                <div className='mt-5 d-flex justify-content-center'>
                    <Button className='w-75' variant="primary" type="submit">
                        <span className='fs-5 fw-bold'>Log In</span>
                    </Button>
                </div>

                <h3 className='text-center mt-4 fw-bold'>Or</h3>

                <div className='mt-3 d-flex flex-column'>
                    <Button onClick={handleGoogle} className='btn btn-success mb-3 fw-bold border border-3 border-dark'><FaGoogle /> Log in with Google</Button>
                    <Button onClick={handleGithub} className='btn btn-warning mb-3 fw-bold border border-3 border-dark'><FaGithub /> Log in with GitHub</Button>
                </div>
                <h5 className='mt-5 text-center'>Don't have an account? <Link to='/register' className='text-decoration-none text-danger fw-bold'>Register</Link> Now!</h5>
            </Form>
        </div>
    );
};

export default Login;