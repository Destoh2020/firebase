import { FirebaseError } from '@firebase/util';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useContext, useRef } from 'react';
import { Button, Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { AuthContext } from './context/AuthContext';
import { auth } from './firebaseSetup';

function App() {
  const user = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    await createUserWithEmailAndPassword(
      auth,
      emailRef.current!.value,
      passwordRef.current!.value
    ).catch((error: FirebaseError) => {
      // You can get more error options from the error object
      Swal.fire({
        icon: 'error',
        title: 'Sign Up Failed!',
        text: error.message,
      });
    });
  };

  const signIn = async () => {
    await signInWithEmailAndPassword(
      auth,
      emailRef.current!.value,
      passwordRef.current!.value
    ).catch((error: FirebaseError) => {
      // You can get more error options from the error object
      Swal.fire({
        icon: 'error',
        title: 'Sign In Failed!',
        text: error.message,
      });
    });
  };

  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      <Navbar className='justify-content-between' bg='dark' variant='dark'>
        <Navbar.Brand className='ml-20'>Firebase Authentication</Navbar.Brand>
        <button
          onClick={signOut}
          type='button'
          style={{
            backgroundColor: 'white',
            color: 'green',
            boxShadow: 'none',
            border: 'none',
            borderRadius: '10px',
          }}
        >
          {' '}
          Sign Out
        </button>
      </Navbar>
      {!user ? (
        <Container style={{ maxWidth: '500px' }}>
          <Form className='mt-4'>
            <Form.Group controlId='formEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type='email' placeholder='email' />
            </Form.Group>
            <Form.Group controlId='formPassword' id='email'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type='password'
                placeholder='password'
              />
            </Form.Group>
            <Row className='mt-4'>
              <Col xs={6}>
                <Button onClick={createAccount} type='button'>
                  Sign Up
                </Button>
              </Col>

              <Col xs={6}>
                <Button onClick={signIn} type='button' variant='secondary'>
                  Sign In
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      ) : (
        <h2 className='mt-4 text-center'>Welcome {user.email}</h2>
      )}
    </>
  );
}

export default App;
