import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../styles/booking-form.css';
import { Form, FormGroup } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

const BookingForm = () => {
   const [userForm, setUserForm] = useState({
    name:"",
    cnic:"",
    jobdep:"",
    empno:"",
    carmodal:"", 
    idate:"",    
    edate:"",    
    address:"", 
    mobile:"",       
   });
   const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log(userForm);
    axios
      .post("http://localhost:4000/booking/create-booking", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
            name:"",
            cnic:"",
            jobdep:"",
            empno:"",
            carmodal:"", 
            idate:"",    
            edate:"",    
            address:"", 
            mobile:"",       
        });
      });
  };
  useEffect(() => {}, []);
  return (
    <>
    <Form onSubmit={onSubmit}>
        <FormGroup className='booking__form d-inline-block me-4 mb-4'>
            <input type='text' placeholder='First Name' 
                name="name"
                id="name"
                value={userForm.name}
                onChange={inputsHandler}
            required />

            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='number' placeholder='CNIC' 
                name="cnic"
                id="cnic"
                value={userForm.cnic}
                onChange={inputsHandler}
                required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type='text' placeholder='Job Department' 
                name="jobdep"
                id="jobdep"
                value={userForm.jobdep}
                onChange={inputsHandler}
                required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='text' placeholder='Employee Number' 
                name="empno"
                id="empno"
                value={userForm.empno}
                onChange={inputsHandler}
                required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type='text' placeholder='Car Model Number'
                 name="carmodal"
                 id="carmodal"
                 value={userForm.carmodal}
                 onChange={inputsHandler}
                 required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='date' placeholder='Issue Date'  
                name="idate"
                id="idate"
                value={userForm.idate}
                onChange={inputsHandler}
                required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type='date' placeholder='Return Date'  
                name="edate"
                id="edate"
                value={userForm.edate}
                onChange={inputsHandler}
                required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='text' placeholder='To Address' 
                name="address"
                id="address"
                value={userForm.address}
                onChange={inputsHandler}
                required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type='number' placeholder='Mobile Number' 
                name="mobile"
                id="mobile"
                value={userForm.mobile}
                onChange={inputsHandler}
                required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='time' placeholder='Journey Time' className='time__picker' required />
            </FormGroup>            
            <FormGroup>
                 <button className="booking__form submit__btn ms-1">
                    Add Data
                 </button>
            </FormGroup>
            </Form>
            </>
  )
}
export default BookingForm;