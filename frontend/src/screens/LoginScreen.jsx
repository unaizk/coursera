import React from 'react'
import FormContainer from '../component/FormContainer'
import { Form , Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react';



const LoginScreen = () => {
    
const [email,setEmail] = useState('');
const [password, setPassword] = useState('')

const submitHandle = async(e)=>{
    e.preventDefault();
    console.log('submit');
}
  return (
    <FormContainer>
        <h1 style={{textAlign : 'center' , fontFamily: 'Lato, sans-serif', fontSize: '50px', fontWeight: 'bold'}}>Sign In</h1>
        <Form onSubmit={submitHandle}>
            <Form.Group className='my-2' controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='emal' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='my-2' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
            </Form.Group>
            <Button type='submit' variant='dark' className='mt-3'>Sign in</Button>
            <Row className='py-3'>
                <Col>
                    New Customer? <Link to={'/register'}> Register</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default LoginScreen