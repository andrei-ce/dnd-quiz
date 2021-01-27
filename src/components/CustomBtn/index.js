import styled from 'styled-components';
import PropTypes from 'prop-types';

const CustomBtn = styled.button`
  font-size: 14px;
  line-height: 1;
  text-align: center;
  max-width: 200px;
  width: 50%;
  padding: 5px 20px;
  margin: 0 auto 15px auto;
  outline: 0;
  border: 1px solid;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: 1s;
  /* dependend on props */
  background-color: ${(props) => {
    if (props.disabled) {
      return props.theme.colors.mainBg;
    } else {
      return props.theme.colors.secondary;
    }
  }};
  border-color: ${({ disabled, color, theme }) => {
    if (disabled) {
      return theme.colors.disabled;
    } else {
      color === 'success'
        ? theme.colors.success
        : color === 'wrong'
        ? theme.colors.wrong
        : theme.colors.secondary;
    }
  }};
  color: ${(props) => {
    if (props.disabled) {
      return props.theme.colors.disabled;
    } else {
      props.color === 'success'
        ? props.theme.colors.success
        : props.color === 'wrong'
        ? props.theme.colors.wrong
        : props.theme.colors.secondary;
    }
  }};
  &:hover,
  &:focus {
    cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
    background-color: ${(props) => {
      if (!props.disabled) {
        props.color === 'success'
          ? props.theme.colors.success
          : props.color === 'wrong'
          ? props.theme.colors.wrong
          : props.theme.colors.secondary;
      }
    }};
    color: ${({ theme, disabled, color }) => {
      if (disabled) {
        return theme.colors.disabled;
      } else {
        color === 'success'
          ? theme.colors.success
          : color === 'wrong'
          ? theme.colors.wrong
          : theme.colors.secondary;
      }
      disabled ? theme.colors.disabled : null;
    }};
    box-shadow: 0px 0px 10px #fff;
  }
`;

CustomBtn.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']).isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['success', 'wrong', 'normal']),
  disabled: PropTypes.bool,
};

CustomBtn.defaultProps = {
  color: 'normal',
  disabled: true,
};

export default CustomBtn;
