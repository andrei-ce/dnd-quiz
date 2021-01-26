import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ className }) => (
  <div style={{ display: 'flex', justifyContent: 'center', height: '130px' }}>
    <img
      src='https://rpgknights.com/wp-content/uploads/2014/07/dungeons-and-dragons-5e-logo.png'
      alt='D&D Logo'
      height='200'
      width='300'
    />
  </div>
);

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
