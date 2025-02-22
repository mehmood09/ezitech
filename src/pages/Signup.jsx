import React from 'react'
//import '../../styles/booking-form.css';
import { Form, FormGroup } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/UI/RegisterForm';

const Signup = () => {
    const submitHandler = event => {
        event.preventDefault()
    }
    return (
        <>
        
          <Container>
            <Row className='form__row'>
              <Col lg='4' md='4'>
                <div className="find__cars-left">
                  <h2>Create Account</h2>
                </div>
              </Col>
              <Col lg='8' md='8' sm='12'>
                <RegisterForm/>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
        

        </>
    )
}
export default Signup;