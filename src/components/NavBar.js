
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState,useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';



export const NavBar = () => {

 const [activeLink,SetActivelink] = useState('home');
 const [scrolled,setScorlled] =useState(false);  


useEffect( ()=>{
const onScroll = () =>{
    window.scrollY > 50 ? setScorlled (true) : setScorlled(false)
}
window.addEventListener( "scroll",onScroll )

return window.removeEventListener("scroll",onScroll)
},[])

const onUpdateActivelink = (value) =>{


}

const handleClick = () => {
    var yourEmail = "shiwanvir@gmail.com"
    window.location.href = `mailto:${yourEmail}`;
  };
    return (

        <Navbar expand="lg" className={scrolled ? "scrolled" : "" }>
            <Container>
                {/* <Navbar.Brand href="#home">
                    <img src={logo} alt='Logo'/> 
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink=='home' ? 'active navbar-link' : 'navbar-link'} onClick= {()=>{onUpdateActivelink('home')}}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink=='skills' ? 'active navbar-link' : 'navbar-link'} onClick= {()=>{onUpdateActivelink('skils')}}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink=='projects' ? 'active navbar-link' : 'navbar-link'} onClick= {()=>{onUpdateActivelink('projects')}}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/shiwantha-viraj-123326143/'><img src={navIcon1} alt=''/></a>
                            <a href='https://www.facebook.com/shiwantha.viraj/'><img src={navIcon2} alt=''/></a>
                            <a href='https://github.com/shiwanvir?tab=repositories'><img src={navIcon4} alt=''/></a>


                        </div>
                <button className='vv' onClick={handleClick}><span>Let's connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )

}