import React from 'react'
import HeroSlider from '../components/UI/HeroSlider';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import FindCarForm from '../components/UI/FindCarForm';
import AboutSection from '../components/UI/AboutSection';
import carData from '../assets/data/carData';
import courseData from '../assets/data/courseData';
import CarItem from '../components/UI/CarItem';
import Category from '../components/UI/Category';

import Courses from "../components/Courses-section/Courses";

import heroImg01 from "../assets/images/hero-img10.png";
import heroImg02 from "../assets/images/hero-img60.webp";
import heroImg03 from "../assets/images/hero-img50.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";

const Home = () => {
  return (
    <>
      <Helmet title='Home'>

        {/** ================= hero section ================= */}

        <section className="p-0 hero__slider-section">
          <HeroSlider />

        </section>

        {/** ============ About Section ================ */}

        <section>
          <Container>
            <Row>
              <Col lg='6' md='6'>
                <div className="xl:w-[500px] flex justify-end mt-[5px] lg:mt-0">
                  <img src={heroImg03} className="w-2/4 rounded w-100" alt="" />
                </div>
              </Col>
              <Col lg='6' md='6'>
                <div className="xl:w-[670px]">
                  <h2 className="heading">
                    Best IT Services Award 2023
                  </h2>
                  <p className="text__para text-justify">
                    <p className="section__description">
                      Ezitech Is affiliated With Eziline Software House. Eziline has been awarded the prestigious Best Software House in IT sector award by the President of Pakistan. This is an incredible achievement and a testament to the hard work and dedication of the entire team at Eziline Software House. The award is a great recognition of the company’s achievements in the field of IT and serves as a major milestone in its journey towards success.
                      <br /><br />
                      This award is a huge source of motivation and inspiration for the entire team at Eziline Software House. It is a validation of the company’s commitment to innovation, excellence, and customer satisfaction. The award acknowledges the hard work and dedication of every member of the team who has contributed to the success of the company.
                      <br /><br />
                      Ismail Shah, the CEO of Eziline Software House Pvt Ltd, received the Best Services Award in the IT sector from the President of Pakistan, Dr. Arif Alvi, in recognition of his remarkable contributions to the country’s technology industry.
                    </p>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>


        {/**================ How it Works */}
        <section>
          <Container>
            <Row>
              <Col lg='12' md='12' sm='12'>
                <section>
                  <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                      <h2 className="heading text-center">
                        How it works?
                      </h2>
                      <p className="text__para text-justify">

                      </p>
                    </div>
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
                    lg:mt-[55]"
                    >
                      <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                          <img src={icon01} alt="" />
                        </div>
                        <div className="mt-[30px]">
                          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                            Sign Up
                          </h2>
                          <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-justify">
                            Enter your name, email, and contact details to get started. It truly is that simple!
                          </p>

                        </div>
                      </div>
                      <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                          <img src={icon02} alt="" />
                        </div>

                        <div className="mt-[30px]">
                          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                            Select course
                          </h2>
                          <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-justify">
                            Browse our extensive and ever-expanding variety of courses for professional development.
                          </p>

                        </div>
                      </div>
                      <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                          <img src={icon03} alt="" />
                        </div>

                        <div className="mt-[30px]">
                          <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                            Start Learning
                          </h2>
                          <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-justify">
                            Do the tasks, and your teacher will evaluate them before providing you with thorough
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </Col>
            </Row>
          </Container>
        </section>

        {/** ============ Trend Section ================ */}
        <section>
          <Container>
            <Row>
              <Col lg='12' className='text-center mb-5'>
                <h2 className="section__title">
                  What new trends and technology will <br /> you discover? </h2>
                <h6 className="section__subtitle">
                  <br /><br />Today's technology is developing quickly, and our new technological trends are enabling and <br /> advancing, speeding up the pace of development. </h6>
              </Col>
              {
                courseData.slice(0, 12).map((item) => (
                  <CarItem item={item} key={item.id} />
                ))}
            </Row>
          </Container>
        </section>

        {/* =================== Course Learning ================*/}
                
        <section>
          <Container>
            <Row>
            <Col lg='12' md='12' sm='12'>
              <Courses />
              </Col>
            </Row>
          </Container>
        </section>


        <section>
          <Container>
            <Row>
            <Col lg='12' md='12' sm='12'>
            <h2 className="section__title text-center">
            Perfect Internship's For You </h2>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
        <a class="block relative h-28 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
        </a>
        <div class="mt-4 p-2">
        <h1 class="text-indigo-900 font-weight[800] title-font text-lg font-medium">
                   HTML CSS</h1>
          <h2 class="text-gray-900 title-font text-lg font-medium">
          <span>
                <i className='ri-user-fill'></i>
              </span> &nbsp;
            Employement - Hybrid</h2>
          <h2 class="text-gray-900 title-font text-lg font-medium">
          <span>
                <i className='ri-send-plane-fill'></i>
              </span> &nbsp;
            Location - Rawalpindi</h2>
          <h2 class="text-gray-900 title-font text-lg font-medium">
          <span>
                <i className='ri-briefcase-fill'></i>
              </span> &nbsp;
            Job Type - Full Time Part Time</h2>
          <p class="mt-1"><button type='submit' className='btn'>Read More</button></p>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
        <a class="block relative h-28 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
        </a>
        <div class="mt-4 p-2">
        <h1 class="text-indigo-900 font-weight[800] title-font text-lg font-medium">
                   Graphic Designing</h1>
          <h2 class="text-gray-900 title-font text-lg font-medium">
          <span>
                <i className='ri-user-fill'></i>
              </span> &nbsp;
            Employement - Hybrid</h2>
          <h2 class="text-gray-900 title-font text-lg font-medium">
          <span>
                <i className='ri-send-plane-fill'></i>
              </span> &nbsp;
            Location - Rawalpindi</h2>
          <h2 class="text-gray-900 title-font text-lg font-medium">
          <span>
                <i className='ri-briefcase-fill'></i>
              </span> &nbsp;
            Job Type - Full Time Part Time</h2>
          <p class="mt-1"><button type='submit' className='btn'>Read More</button></p>
        </div>
      </div>
      <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
        <a class="block relative h-28 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
        </a>
        <div class="mt-4 p-2">
        <h1 class="text-indigo-900 font-weight[800] title-font text-lg font-medium">
                   Digital Marketing</h1>
          <h2 class="text-gray-900 title-font text-lg font-medium">
          <span>
                <i className='ri-user-fill'></i>
              </span> &nbsp;
            Employement - Hybrid</h2>
          <h2 class="text-gray-900 title-font text-lg font-medium">
          <span>
                <i className='ri-send-plane-fill'></i>
              </span> &nbsp;
            Location - Rawalpindi</h2>
          <h2 class="text-gray-900 title-font text-lg font-medium">
          <span>
                <i className='ri-briefcase-fill'></i>
              </span> &nbsp;
            Job Type - Full Time Part Time</h2>
          <p class="mt-1"><button type='submit' className='btn'>Read More</button></p>
        </div>
      </div>
     
      </div>
      
  </div>
</section>
              </Col>
            </Row>
          </Container>
        </section>


        <section>
          <Container>
            <Row>
              <Col lg='6' md='6' sm='6'>
                <div className="xl:w-[450px] flex justify-end mt-[5px] lg:mt-0">
                  <img src={heroImg02} className="w-2/4 rounded w-100" alt="" />
                </div>
              </Col>
              <Col lg='6' md='6' sm='6'>
                <div className="xl:w-[600px]">
                  <h2 className="heading">
                    Learning Anything <br /> From Anywhere
                  </h2>
                  <p className="text__para text-justify">
                    To provide one step solution to all of our customers needs ranging from software and business automation.
                    At Alhamd Solution we follow a strict process procedure, which allows us to work productively with clients,
                    saving time and maintaining the highest level of quality. We have the best strategy and business consultants in
                    our team, this allows us to undestand the clients exact needs and develop the perfect solution for him. Our mission
                    is to provide innovative affoardable Business and Technology Solutions.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>


      </Helmet>
    </>
  )
}

export default Home