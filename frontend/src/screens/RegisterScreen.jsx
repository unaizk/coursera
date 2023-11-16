import React from 'react'
import FormContainer from '../component/FormContainer'
import { Form , Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const submitHandle = async(e)=>{
        e.preventDefault();
        console.log('submit');
    }
      return (
        <FormContainer>
            <h1 style={{textAlign : 'center' , fontFamily: 'Lato, sans-serif', fontSize: '50px', fontWeight: 'bold'}}>Sign Up</h1>
            <Form onSubmit={submitHandle}>
                <Form.Group className='my-2' controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='emal' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='my-2' controlId='ConfirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='dark' className='mt-3'>Sign up</Button>
                <Row className='py-3'>
                    <Col>
                        Already have an account? <Link to={'/login'}> Login</Link>
                    </Col>
                </Row>
            </Form>
        </FormContainer>
      )
}

export default RegisterScreen