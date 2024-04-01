import React from 'react'
import {Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/car-item.css';

const CarItem = (props) => {
    const { imgUrl, model, carName, automatic, speed, price} = props.item;
  return (
    <>
    <Col lg='2' md='2' sm='4' className='mb-10'>
    <div className='car__item'>
        <div className="car__img">
            <img src={imgUrl} alt='' className='w-50' />
        </div>
        <div className="car__item-content mt-4">
            <h4 className="section__title text-center"> {carName}</h4>
           
        </div>
    </div>
    </Col>
    </>
    
    
  )
}
export default CarItem;
