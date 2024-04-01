import React from 'react'
import { Container , Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/footer.css';
import heroImg02 from "../../assets/images/footer.webp";

const quickLinks = [
  
  {
    path:'/contact',
    display: 'CONTACT US'
  },
  {
    path:'#',
    display: 'SHOP'
  },
  
  {
    path:'#',
    display: 'INTERNSHIP'
  },
  {
    path:'#',
    display: 'CODELAB'
  },
]


 const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()

  return (
    <>
    <footer className='footer'>
    <Container>
      <Row>
      <Col lg='12' className='text-center mb-5'>
                <h2 className="footer__title">
                  It's time to start investing in <br /> youself </h2>                
      </Col>
      </Row>
      <Col lg='12' className='text-center mb-5'>
      <div className="xl:w-[1350px] flex justify-end mt-[5px] lg:mt-0">
                  <img src={heroImg02} className="w-4/4 rounded w-100" alt="" />
                </div>
      </Col>
      <Row>
        <Col lg='4' md='4' sm='12'>
        <div className="logo footer__logo">
                <h1>
                  <Link to='/home' className='d-flex align-items-center gap-2'>
                    <i className='ri-global-line'></i>
                    <span>About</span>
                  </Link>
                </h1>
              </div>
              <p className="footer__logo-content">
                Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical Information Tecgnology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.
              </p>
        </Col>
        <Col lg='3' md='4' sm='12'>
          <div className='mb-4'> 
          <h5 className="footer__link-title">Newsletter</h5>
            <p className="section__description">
              Subscribe our newsletter</p>
            <div className="newsletter">
              <input type='email' placeholder='Email' />
              <span>
                <i className='ri-send-plane-line'></i>
              </span>
            </div>
          </div>
        </Col>
        <Col lg='2' md='4' sm='6'>
          <div className='mb-4'>
            <h5 className="footer__link-title">
              Quick Links
            </h5>
              <ListGroup>
                {
                  quickLinks.map((item, index) => (
                    <ListGroupItem key={index} className='p-0 mt-3 quick__link'>
                      <Link to={item.path}> <span>
                <i className='ri-circle-fill'></i>
              </span> {item.display}
                      </Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
          </div>
        </Col>
        <Col lg='2' md='4' sm='6'>
        <div className='mb-4'>
        <h5 className="footer__link-title mb-4">
              CONTACT
            </h5>
          <p className="office__info">
          <span>
                <i className='ri-map-pin-2-fill'></i>
              </span> &nbsp; Office No.304-B Amna Plaza
            </p>
            <p className="office__info">
            <span>
                <i className='ri-phone-fill'></i>
              </span> &nbsp; +923337854361
            </p>
            <p className="office__info">
            <span>
                <i className='ri-send-plane-line'></i>
              </span> &nbsp; info@ezitech.com
            </p>
            <p className="office__info">
            <span>
                <i className='ri-time-line'></i>
              </span> &nbsp; Office Time: 10am - 7pm
            </p>
        </div>        
        </Col>
        
        <Col lg='12'>
          <div className="footer__bottom">
            <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
              <i className='ri-copyright-line'></i>
              Copyright {year}, Developed by MEHMOOD QADIR Software Engineer. Phone: +923130002348 
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </footer>
    </>
    
  )
}
export default Footer;