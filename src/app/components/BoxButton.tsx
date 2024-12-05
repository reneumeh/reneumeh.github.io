
import styled from 'styled-components';
import { PALETTE } from '../utils/theme';

interface BoxButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    children: any,
    link?: string,
}

const BoxButton = ({ children, link, ...rest } : BoxButtonProps) => {
  return (
    <BoxButtonVWrapper>
        <div className='button'
            {...rest}>
                {
                    link ?
                    <a className='button-inside'
                    href={link}
                    target='_blank'
                    >
                        {children}
                    </a> :
                    <div className='button-inside'>
                        {children}
                    </div>
                }
        </div>
</BoxButtonVWrapper>
  )
}

export default BoxButton

const BoxButtonVWrapper = styled.div`
    cursor: pointer;
    .button {
        text-decoration: none;
        display: flex;
        justify-content: center;
    }
    .button-inside, .button-inside:visited, .button-inside:active {
        padding: 1rem 1.5rem;
        font-size: 1rem;
        text-decoration: none;
        background-color: ${PALETTE.PRIMARY.DEFAULT}; 
        color: ${PALETTE.WHITE};
        text-decoration: none;
    }
    .button-inside:hover, .button-inside:active {
        transform: scale(1.1);
        transition: ease all 0.5s;
        text-decoration: none;
        background-color: ${PALETTE.PRIMARY.DARK}; 
    }
`;