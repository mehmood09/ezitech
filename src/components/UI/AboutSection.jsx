import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../../styles/about-section.css';
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = () => {
    return (
        <>
            <section className='about__section'>
                <Container>
                    <Row>
                    <Col lg='6' md='6'>
                            <div className="about__img">
                                <img src={aboutImg} alt='' className='w-100' />
                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="about__section-content">
                                <h4 className="section__subtitle">                                
                                </h4>
                                <h1 className="section__title">
                                Best IT Services Award 2023
                                </h1>
                                <p className="section__description">
                                Ezitech Is affiliated With Eziline Software House. Eziline has been awarded the prestigious Best Software House in IT sector award by the President of Pakistan. This is an incredible achievement and a testament to the hard work and dedication of the entire team at Eziline Software House. The award is a great recognition of the company’s achievements in the field of IT and serves as a major milestone in its journey towards success.
                                <br/><br/>
                                This award is a huge source of motivation and inspiration for the entire team at Eziline Software House. It is a validation of the company’s commitment to innovation, excellence, and customer satisfaction. The award acknowledges the hard work and dedication of every member of the team who has contributed to the success of the company.
                                <br/><br/>
                                 Ismail Shah, the CEO of Eziline Software House Pvt Ltd, received the Best Services Award in the IT sector from the President of Pakistan, Dr. Arif Alvi, in recognition of his remarkable contributions to the country’s technology industry.
                                </p>
                                
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default AboutSection;
