import useIsScrolling from "../hooks/useIsScrolling";
import useIsMenuOpen from "../hooks/useIsMenuOpen";
import styled, { css } from 'styled-components';
import { PALETTE } from "../utils/theme";

const HeaderComp = (props: { Portfolio: any; Contact: any; }) => {
    const {isScrolling, scrollToElement} = useIsScrolling();
    const {isMenuOpen, setMenuOpen} = useIsMenuOpen();

    const pages = [
        {
            name: "홈",
            link: "#/kor",
            img: "static/home.png"
        },
        {
            name: "포트포리오",
            ref: props.Portfolio,
            img: "static/portfolio.png",
            link: "",
        },
        {
            name: "브로그",
            link:  "#/blog",
            img: "static/blog.png"
        },
        {
            name: "연락처",
            ref: props.Contact,
            img: "static/contact.png",
            link: "",
        }
    ] 
  return (
    <Header isScrolling= {isScrolling}>
        <a className="logo"
        href= "#/kor"
        target="_self"
        rel="noopener noreferrer"
        > 
            <span>레네이 </span>우메이
        </a>
        <NavBar isScrolling= {isScrolling} isMenuOpen= {isMenuOpen}>
            {pages.map((page) => (
                <div
                key={page.name}
                className="page-buttons"
                onClick={() => (page.ref ? scrollToElement(page.ref) : window.location.assign(page.link))}>
                    <img 
                    className='phone-icons' 
                    width= {20} 
                    alt={page.name}
                    src= {page.img} />
                        {page.name}
                </div>
            ))}
            <img className='phone-icons hamburger' alt='함버거' width= {20} src= 'static/hamburger.png' onClick={() => {setMenuOpen(true)}}/>
            <img className='phone-icons close'  alt= '닫침' width= {20} src= 'static/close.png' onClick={() => {setMenuOpen(false)}}/>
        </NavBar>
        <div className='language'><a className='top' href='#/'>영</a><a className='bottom'href="#/kor">한</a></div>
    </Header>
  )
}

export default HeaderComp

const Header = styled.div<{ isScrolling: boolean }>` 
    position: ${({ isScrolling }) =>
    isScrolling === true ? 'fixed' : "absolute"};
    border-bottom: ${({ isScrolling }) =>
    isScrolling === true ? 'solid rgba(0, 0, 0, 0.2) 1px' : ""};
    display: flex;
    background-color: ${({ isScrolling }) =>
    isScrolling === true ?  `${PALETTE.BACKGROUND}` : ""};
    justify-content: ${({ isScrolling }) =>
    isScrolling === true ? 'space-between' : ""};
    width: calc(100vw - 17px);
    z-index: ${({ isScrolling }) =>
    isScrolling === true ? "999999" : "9999"};
    font-size: 1.1rem;

    .logo, logo:visited, logo:active{
        display: ${({ isScrolling }) =>
        isScrolling === true ? 'flex' : 'none'};
        width: max-content;
        align-items: center;
        color: ${PALETTE.PRIMARY.DEFAULT};
        text-decoration: none;
        margin: 0px 0vw 0px 1vw;
        font-weight: bold;
        font-family: korean-font;
        font-stretch: expanded;
        font-size: 2rem;
        white-space: nowrap;
        span {
            color: ${PALETTE.BLACK};
        }
    }

    .language {
        position: absolute;
        right: calc(100vw - 97.2vw);
        top: 4.5em;
        display: ${({ isScrolling }) =>
        isScrolling === true ? 'none' : 'flex'};
        flex-direction: column;
        border: 1px solid ${PALETTE.BLACK};
        border-radius: 20px;
        background-color: ${PALETTE.SECONDARY.LIGHT};
        font-size: 0.9rem;
        :hover {
            background-color: ${PALETTE.WHITE};
            color: ${PALETTE.WHITE};
        }
        .top, top:visited, top:active {
                padding: 0.7rem 0.5rem;
                text-decoration: none;
                border-radius: 20px 20px 0px 0px;
                color: ${PALETTE.BLACK}; 
                border-bottom: 1px solid ${PALETTE.BLACK};
            }
        .bottom, .bottom:visited, bottom:active {
            padding: 0.7rem 0.5rem;
            text-decoration: none;
            border-radius: 0px 0px 20px 20px;
            color: ${PALETTE.BLACK};
        }
    }

    @media screen and (max-width: 700px) { 
        display: flex; 
        justify-content: center;
        width: 100vw;
        .language {
        top: 3.5em;
        z-index: -1;
        }
        .logo {
            margin: 0.3rem 0;
        }
    }  
    `;

const NavBar = styled.div<{ isScrolling: boolean, isMenuOpen: boolean }>`
    @media screen and (min-width: 700px) {
    .phone-icons {
        visibility: hidden;
        display: none;
    }
    ${({ isScrolling }) => {
        switch (isScrolling) {
            case false:
                return css`
                    height: 5.9em;
                    display: grid;
                    grid-template-columns: repeat(2, 1.2fr);
                    justify-content: center;
                    width: 98vw;
                    font-weight: bold;
                    font-family: Leaugue-Spartan;
                    font-stretch: expanded;
                    font-size: 2rem;
                    .page-buttons {
                        margin: 0.5em auto;
                        
                    }
                    .page-buttons:nth-child(-n + 2) {
                        border-bottom: 1px solid ${PALETTE.BLACK};
                        color: ${PALETTE.PRIMARY.DEFAULT};
                        margin: 2em auto 0em auto;
                    }
                    .page-buttons:hover{
                        font-size: 1.9rem;
                        cursor: pointer;
                        transition: ease all 0.5s;
                    }
                `;
            case true:
                return css`
                display: flex;
                font-weight: bold;
                font-family: Leaugue-Spartan;
                font-stretch: expanded;
                font-size: 1.5rem;
                .page-buttons{
                    padding: 2rem;
                }
                :hover {
                    color: ${PALETTE.WHITE};
                    background-color: ${PALETTE.PRIMARY.DEFAULT};
                    cursor: pointer;
                }
                `;
            }
        }}
    }

    @media screen and (max-width: 700px) {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: ${PALETTE.BACKGROUND};
        left: ${({ isMenuOpen }) =>
        isMenuOpen === true ? '0vw' : '-100vw'};
        transition: 0.5s ease all;
        .page-buttons {
            z-index: 99999;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-auto-rows: 10rem;
            border-bottom: 1px solid rgba(0,0,0, 0.5);
            text-transform: uppercase;
            display: flex;
            align-items: center;
            padding: 2rem 0;
            font-family: Leaugue-Spartan;
        }
        .page-buttons:first-child {
            margin-top: 2.5rem;
        }
        .page-buttons img {
            margin: 0 10px 0 2rem;
        }
        .phone-icons {
            display: block;
            visibility: visible;
        }
        .hamburger {
            position: ${({ isScrolling }) =>
            isScrolling === true ? 'fixed' : 'absolute'};
            z-index: -1;
            top: ${({ isScrolling }) =>
            isScrolling === true ? '0.5rem' :'5rem' };
            left: ${({ isScrolling }) =>
            isScrolling === true ? '0.3rem' :'108vw' };
        }
        .close {
            position: absolute;
            top: 1.5rem;
            left: 2rem;
        }
    }
    `;