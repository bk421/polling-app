import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavMenuTop from '../NavMenuTop/index';
import NavMenuBottom from '../NavMenuBottom/index';

import '../../fonts/_fonts.css'

const NavMenuContainer = styled.div`
  background-color: #6CD1EF;
  color: #333;
  height: 100%;
  width: 100%;
  position: fixed;
  top:0;
  left:0;
  opacity: 0;
  visibility: hidden;
  text-align: center;
  transition: opacity 1.0s ease-in-out;
  z-index: 1001;
`
const NavMenuHR = styled.hr`
    width: 70%;
    border-style: solid;
    color: white;
    border-width: 1.1px;
`

const NavMenuContainer = () => (
  <NavMenuTop />
  <NavMenuHr />
  <NavMenuBottom />
);

export default NavMenuContainer;
