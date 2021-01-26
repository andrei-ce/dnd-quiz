import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 12px;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
  }
  span {
    text-decoration: underline;
  }
`;

const Footer = (props) => (
  <FooterWrapper {...props}>
    <a href='https://www.alura.com.br/'>
      <img
        src='https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg'
        alt='Logo Alura'
      />
    </a>
    <p>
      Criado durante:
      {' '}
      <a href='https://www.alura.com.br/'>
        <span>Imersão React da Alura</span>
      </a>
    </p>
  </FooterWrapper>
);

export default Footer;
