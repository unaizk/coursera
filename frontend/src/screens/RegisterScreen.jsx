import React from 'react'
import FormContainer from '../component/FormContainer'
import { Form , Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import { useRegisterMutation } from '../slices/userApiSlice';
import { setCredential } from '../slices/authSlice';
import Loader from '../component/Loader';
import {toast} from 'react-toastify'

const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);

    const [register, {isLoading}] = useRegisterMutation()

    useEffect(()=>{
        if(userInfo){
            navigate('/')
        }
    },[userInfo,navigate])


    const submitHandle = async(e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            toast.error('Confirm password does not match')
        }else{
            try {
                const res = await register({name, email, password}).unwrap();
                dispatch(setCredential({...res}))
                navigate('/')
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }
        
    }
      return (
        <FormContainer>
            <div style={{ position: 'relative' }}>
            {isLoading && <Loader />}
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
            </div>
        </FormContainer>
      )
}

export default RegisterScreen