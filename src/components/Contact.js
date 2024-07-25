import { useState } from "react"
import { Col, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";


export const  Contact = ()=> {

const formInitDetails = {
firstName:'',
lastName:'',
email:'',
phone:'',
message:''


}

const [formDetails,setFormDetails] = useState(formInitDetails);
const [buttonText,SetButtonText] = useState('Send');
const [status,setStatus] = useState({});

const onFormUpdate =(category,value)=>{
    setFormDetails({
        ...formDetails,
        [category]:value
    })
}

  return (
    <section className="Contact" id="contact">

        <Container>
            <Row className="align-items-center">
               <Col md={6} className>
               
               <img src={contactImg} alt='Contact us'/>
               </Col> 
               <Col md={6}>
                <h2>Get In Touch</h2>
                <form>
                <Row>
                <Col sm={6} className="px-1">
                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>   
                </Col>
                <Col sm={6} className="px-1">
                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>   
                </Col>
                <Col sm={6} className="px-1">
                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e)=>onFormUpdate('email',e.target.value)}/>   
                </Col>
                <Col sm={6} className="px-1">
                <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e)=>onFormUpdate('phone',e.target.value)}/>   
                </Col>
                <Col>
                <textarea row="6" value={formDetails.message} placeholder="Message" onChange={(e)=>onFormUpdate('message',e.target.value)}/>   
                <button type="submit"><span>{buttonText}</span></button>
                </Col>
                    {
                        status.message &&
                        <Col>
                        <p className={status.sucess ===false ? "danger" : "sucess"}>{status.message}</p>
                        </Col>

                    }

                </Row>


                </form>
                </Col>


            </Row>


        </Container>

    </section>
   
  )
}
