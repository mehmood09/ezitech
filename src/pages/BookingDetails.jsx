import React from 'react'
import BookingTable from '../components/Employee/BookingTable';
import '../styles/view-employee.css';


const BookingDetails = () => {
  return (
    <>    
    <div className="table-wrapper">
    <div className='table'>
    <BookingTable/>
    </div>
    
    </div>
    
    </>
    
  )
}
export default BookingDetails;
