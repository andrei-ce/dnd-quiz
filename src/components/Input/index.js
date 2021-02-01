import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StandardInput = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

const Input = ({ onChange, placeholder, ...props }) => {
  return (
    <div>
      <StandardInput onChange={onChange} placeholder={placeholder} {...props} />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  checked: false,
};

export default Input;
