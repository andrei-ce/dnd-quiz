import styled from 'styled-components';

const Card = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 7px;
  box-shadow: 12px 8px 13px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 12px 8px 13px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 12px 8px 13px 1px rgba(0, 0, 0, 0.75);
  overflow: hidden;
  &:hover {
    box-shadow: 12px 8px 13px 1px rgba(255, 255, 255, 0.05);
  }
  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Card.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
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
  }
`;

export default Card;
