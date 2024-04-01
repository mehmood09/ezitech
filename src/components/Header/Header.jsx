import React, {useRef} from 'react'
import { Container , Row, Col} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/header.css';

  const navLinks = [
    {
      path:'/home',
      display: 'HOME'
    },
    {
      path:'/about',
      display: 'ABOUT US'
    },
    {
      path:'/cars',
      display: 'CERTIFICATIONS'
    },
    {
      path:'/contact',
      display: 'INTERNSHIPS'
    },
    {
      path:'/create-booking',
      display: 'SEMINARS'
    },
    {
      path:'/booking-list',
      display: 'INTERN PORTAL'
    },
    
  ]


 const Header = () => {

  const menuRef = useRef(null)
  const toggleMenu = ()=> menuRef.current.classList.toggle('menu__active')


  return (
    <>
    <header className="header">
      {/** =========== Header Top =============== */}

      <div className="header__top">
        <Container>
          <Row>
          <Col lg='2' md='2' sm='2'>
          </Col>
            <Col lg='8' md='8' sm='8'>
              <div className="header__top__left">
                <span className="header__top__help">
                <i className='ri-phone-fill'></i> +92 3455555396
                <i className='ri-map-pin-2-fill'></i>  Office #304-B Amna Plaza, Rawalpindi, Pakistan
                <i className='ri-time-line'></i>   Mon - Fri 8.00 - 20.00
                </span>
              </div>
            </Col>
            <Col lg='2' md='2' sm='2'>
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
              
                <Link to='/login' className='d-flex align-items-center gap-1'>{" "} <i className='ri-user-line'>Login {" "}</i>
                </Link>
                <Link to='/register' className='d-flex align-items-center gap-1'> {" "} <i className='ri-user-line'>Register {" "}</i>
                </Link>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    {/** =============== Header Middle ====================== */}
      {/**
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg='3' md='3' sm='4'>
              <div className="logo">
                <h1>
                  <Link to='/home' className='d-flex align-items-center gap-2'>
                    <i className='ri-car-line'></i>
                    <span>SONA PROPERTIES <br />Real Estate</span>
                  </Link>
                </h1>
              </div>
            </Col>
            <Col lg='3' md='3' sm='4'>
              <div className="header__location d-flex align-items-center gap-2">
                
                <div className="header__location-content">
                 
                </div>
              </div>
            </Col>
            <Col lg='3' md='3' sm='4'>
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className='ri-time-line'></i></span>
                <div className="header__location-content">
                  <h4>Monday to Saturday</h4>
                  <h6>09:00 AM - 11:00 PM</h6>
                </div>
              </div>
            </Col>
            <Col lg='3' md='3' sm='4'>
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className='ri-earth-line'></i></span>
                <div className="header__location-content">
                  <h4>Hail Health Cluster</h4>
                  <h6>Hail City, Suadia Arabia</h6>
                </div>
              </div>
            </Col>
            
            
          </Row>
        </Container>
      </div>
              */}
      {/** ===================== Main Navigation ================ */}

        <div className="main__navbar">
          <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
              <span className="mobile__menu">
                <i className='ri-menu-line' onClick={toggleMenu}></i>
              </span>
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                  <div className="menu">
                    {
                      navLinks.map((item,index)=>(
                        <NavLink to={item.path} className={navClass=> navClass.isActive ? 'nav__active nav__item' : 'nav__item'} key={index}>
                          {item.display}
                        </NavLink>
                      ))
                    }                    
                  </div>
              </div>
              <div className="nav__right">
                <div className="search__box">
                  <input type='text' placeholder='Search...'/>
                  <span><i className='ri-search-line'></i></span>
                </div>
              </div>
            </div>
          </Container>
        </div>
    </header>
    </>
    
  )
}
export default Header;