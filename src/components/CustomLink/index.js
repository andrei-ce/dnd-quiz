/* eslint-disable indent */
import Link from 'next/link';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import db from '../../../db.json';

const themeColors = db.theme.colors;

const LinkBtn = styled.div`
  padding: 5px 20px;
  margin: 0 auto 15px auto;
  border: 1px solid;
  border-radius: 8px;
  text-align: center;
  transition: 0.3s;
  max-width: 200px;
  width: 50%;
  /* variables */
  // eslint-disable-next-line no-confusing-arrow
  border-color: ${(props) =>
    props.type === 'success'
      ? themeColors.success
      : props.type === 'wrong'
      ? themeColors.wrong
      : themeColors.secondary};
  // eslint-disable-next-line no-confusing-arrow
  color: ${(props) =>
    props.type === 'success'
      ? themeColors.success
      : props.type === 'wrong'
      ? themeColors.wrong
      : themeColors.secondary};
  &:hover,
  &:focus {
    cursor: pointer;
    border-color: ${(props) =>
      props.type === 'success'
        ? themeColors.success
        : props.type === 'wrong'
        ? themeColors.wrong
        : themeColors.secondary};
    background-color: ${(props) =>
      props.type === 'success'
        ? themeColors.success
        : props.type === 'wrong'
        ? themeColors.wrong
        : themeColors.secondary};
    color: ${themeColors.contrastText};
  }
`;

const CustomLink = (props) => (
  <Link href={props.href} className={props.className}>
    <LinkBtn type={props.type}>{props.text}</LinkBtn>
  </Link>
);

CustomLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'wrong', 'normal']),
};

CustomLink.defaultProps = {
  type: 'normal',
};

export default CustomLink;
