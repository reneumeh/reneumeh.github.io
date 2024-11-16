import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { PALETTE } from '../utils/theme';

interface LinkProps {
  url: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ url, children }) => {
  return (
    <Container>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
        <PreviewFrame referrerPolicy='no-referrer' allowFullScreen={true} loading='lazy' src={url} title="Preview" scrolling='no' />
      </a>
    </Container>
  );
};

export default Link;

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: relative;

  a:hover > iframe {
    display: block;
  }
`;

const PreviewFrame = styled.iframe`
  display: none;
  position: absolute;
  z-index: 1000;
  box-shadow: -5px 5px ${PALETTE.PRIMARY.DARK};
  pointer-events:none;
  object-fit: contain;
  object-position: right left;
  resize: both;
`;
