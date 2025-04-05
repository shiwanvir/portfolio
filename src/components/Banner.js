import { useState,useEffect } from "react";
import { Row,Col, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImage from "../assets/img/main-background.png";



export const Banner = () =>{
const [loopNum,setLoopNum] = useState(0);
const [isDeleting,setIsDeleting] = useState(false);
const toRoute = ["Full Stack Developer","Mobile Developer", "UI/UX Designer"];
const [text,setText] = useState('');
const [delta,setDelta] = useState(300 - Math.random*100);
const period = 2000;

useEffect (()=>{
let ticker = setInterval (()=>{
tick()
},delta)

return ()=>{clearInterval(ticker)}
},[text])

const handleClick = () => {
    var yourEmail = "shiwanvir@gmail.com"
    window.location.href = `mailto:${yourEmail}`;
  };
const tick = () =>{

    let i = loopNum % toRoute.length;
    let fullText = toRoute[i];
    let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

    setText(updatedText);
    if(isDeleting){
        setDelta(prevDelta=>prevDelta/2)
    }

    if(!isDeleting && updatedText===fullText){
        setIsDeleting(true)
        setDelta(period)
     }

     else if(isDeleting && updatedText===''){
        setIsDeleting(false)
        setLoopNum(loopNum+1)
        setDelta(500)
     }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className= 'align-items-center'>
                    <Col xs={12}  md={6} xl={7}>
                    <span className="tagline">welcome to my portfolio</span>
                    <h1>{`Hi I'm Shiwantha`}<span className="wrap"> {text}</span> </h1>
                    <p>I'm a detail oriented, responsible committed Software Engineer who have a high quality product development experience. Moreover I have hands on experience in ERP development, SAP integration and mobile app development</p>
                    <button onClick={handleClick}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12}  md={6} xl={7}>
                       <img src={HeaderImage} alt="Header Image"></img> 
                    </Col>

                </Row>

            </Container>

        </section>


    );
}