import React from 'react';
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/hero-slider.css';

const HeroSlider = () => {
    const settings = {
        fade:true,
        speed:2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll:1,
        pauseOnHover:false,
    };
  return (
    <>
    <Slider {...settings} className='hero__slider'>
        <div className="slider__item slider__item-01 mt-0">
        <Container>
            <div className="slider__content">
              <h3
                  className="text-[22px] leading-[60px] text-headingColor font-[600]
                            md:text-[60px] md:leading-[70px] py-[207px] mt-[5px]"
                >
                  Learn the fundamentals with our, <br/> Our Experts in Programming
                </h3> 
                
            </div>
        </Container>
        </div>        
    </Slider>

    </>
  )
}
export default HeroSlider;