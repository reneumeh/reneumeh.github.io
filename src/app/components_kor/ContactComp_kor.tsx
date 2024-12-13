
import React from 'react';
import emailjs from '@emailjs/browser'
import styled, { keyframes } from 'styled-components';
import { PALETTE } from '../utils/theme';
import { useInView } from 'motion/react';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';

type contactProps = {
    contact: React.MutableRefObject<null>, 
    emailForm: React.MutableRefObject<null>,
}

const ContactComp = ({ contact, emailForm }: contactProps) => {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailForm.current) {
            emailjs.sendForm( process.env.EMAIL_SERVICE_ID as string, process.env.EMAIL_TEMPLATE_ID as string, emailForm.current, process.env.EMAIL_OPTIONS as string)
            .then(() => {
                e.currentTarget.reset();
                toast("메시지가 발송되었습니다");
            }, (error) => {
                toast(error.text);
            });
        }
    };

    const isInView = useInView(contact, { once: true, margin: '0px 0px -100px 0px' });
    
  return (
    <ContactWrapper ref={contact} $isInView={isInView}>
        <div className='contact-left'>연락처
            <p>위치: 서울, 대한민국</p>
            <p>
                <RiSendPlaneFill transform='translate(0,2)'/>
                dubemrene@gmail.com
            </p>
            <p>
                <FaLinkedin transform='translate(0,2)' />
                <a href="https://www.linkedin.com/in/reneumeh" target='_blank'> Rene Umeh</a>
            </p>
        </div>
        <div className='contact-right'> 
            <form ref={emailForm} onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder='성함' required />
                <input type="email" name="from_email" placeholder='이메일' required />
                <textarea name="message" rows={6} placeholder='메시지'></textarea>
                <button className="button" type="submit">보내기</button>
            </form>
        </div>
    </ContactWrapper>
  )
}

export default ContactComp

const borderDraw = keyframes`
    0% {
        width: 0;
        height: 0;
    }
    50% {
        width: 80vw;
        height: 0;
    }
    100% {
        width: 80vw;
        height: 22rem;
    }
`;

const ContactWrapper = styled.div<{ $isInView: boolean }>`
    height: fit-content;
    margin-bottom: 50px;
    margin-top: 120px;
    display: flex;
    font-size: 2.5rem;
    font-weight: 600;

    a {
    text-decoration: none;
    }

    p{
        font-size: 1.2rem;
        font-weight: 400;
    }
    form input, form textarea {
        width: 100%;
        border: 0px;
        background-color: ${PALETTE.SECONDARY.LIGHT};
        color: ${PALETTE.BLACK};
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
        border: 1px solid ${PALETTE.WHITE};
        text-decoration: none;
        color: ${PALETTE.WHITE};
        background: ${PALETTE.PRIMARY.DEFAULT};
    }
    .button:hover{
        transform: scale(0.9);
        transition: ease all 0.2s;
        cursor: pointer;
    }

    .contact-left::before {
        content: "";
        border: ${({ $isInView }) => $isInView ? `1px solid ${PALETTE.BLACK}` : ``};
        position: absolute;
        bottom: 25px;
        left: 10vw;
        width: 80vw;
        height: 22rem;
        z-index: -1;
        transition: width 1s ease, height 1s ease;
        animation: ${({ $isInView }) => $isInView && borderDraw} 1s forwards;
    }

 @media screen and (max-width: 700px) { 
        .contact-left::before {
            left: 5vw;
            min-width: 90vw;
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
}
    `; 

