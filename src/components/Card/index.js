import styled from 'styled-components';

const Card = styled.div`
  margin-top: 20px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 7px;
  box-shadow: 12px 8px 13px 1px rgba(255, 255, 255, 0.05);
  -webkit-box-shadow: 12px 8px 13px 1px rgba(255, 255, 255, 0.05);
  -moz-box-shadow: 12px 8px 13px 1px rgba(255, 255, 255, 0.05);
  overflow: hidden;
  transition: 0.4s;
  &:hover {
    box-shadow: 12px 8px 13px 1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 12px 8px 13px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 12px 8px 13px 1px rgba(0, 0, 0, 0.75);
  }
  h1,
  h2,
  h3 {
    font-family: 'Trade Winds', cursive;
    font-size: 22px;
    line-height: 1;
  }
  p {
    font-size: 16px;
    line-height: 1;
  }
`;

Card.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 22px;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

Card.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    font-size: 14px;
  }
`;

Card.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Card;
