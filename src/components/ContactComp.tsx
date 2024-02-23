import React from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const ContactComp = (props: {Contact: React.MutableRefObject<null>, emailForm: React.MutableRefObject<null>}) => {
    const sendEmail =(e:any) => {
        e.preventDefault();
        if(props.emailForm.current) {
            emailjs.sendForm('service_n4wn1nh', 'template_r981zdv', props.emailForm.current, 'SlV3483aRFBrHHQYI')
            .then((result) => {
                e.target.reset();
                alert("Message sent successfully");
            }, (error) => {
                alert(error.text);
            });
        };

        };
  return (
    <ContactWrapper ref={props.Contact}>
        <div className='contact-left'>Contact Me
            <p>Location: Seoul, South Korea</p>
            <p>
                <img
                src='static/send.png'
                alt='send_icon'
                width= {20}/> 
                dubemrene@gmail.com
            </p>
        </div>
        <div className='contact-right'> 
            <form ref={props.emailForm} onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder='Name' required />
                <input type="email" name="from_email" placeholder='Email' required />
                <textarea name="message" rows={6} placeholder='Message'></textarea>
                <button className="button" type="submit">SEND</button>
            </form>
        </div>
</ContactWrapper>
  )
}

export default ContactComp

const ContactWrapper = styled.div`
    height: fit-content;
    margin-bottom: 50px;
    display: flex;
    font-size: 2.5rem;
    font-weight: 600;
    p{
        font-size: 1.2rem;
        font-weight: 400;
    }
    form input, form textarea {
        width: 100%;
        border: 0px;
        background-color: #D4D4D4;
        color: black;
        outline: none;
        padding: 10px;
        font-size: 15px;
        margin: 5px 0px;
        font-family: Helvetica;
    }
    .contact-left {
        flex-basis: 35%;
        margin-left: 13%;
        margin-right: 20%;
    }
    .contact-right {
        flex-basis: 60%;
        margin-right: 14.4%;
    }
    .button{
        padding: 1rem 2rem;
        border: 1px solid white;
        text-decoration: none;
        color: white;
        background: #AB957C;
    }
    .contact-left::before {
        content: "";
        border: 1px solid black;
        position: absolute;
        bottom: 25px;
        left: 10vw;
        width: 80vw;
        height: 22rem;
        z-index: -1;
    }
    @media screen and (max-width: 700px) { 
        .contact-left::before {
            left: 5vw;
            width: 90vw;
        }
        .contact-left {
            max-width: 40%;
            flex-basis: 10%;
            margin-left: 10%;
            margin-right: 10%;
        }
        .contact-right {
            flex-basis: 60%;
        }
    `; 
