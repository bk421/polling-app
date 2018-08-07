import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavMenuSVG from '../NavMenuSVG/index'

import '../../fonts/_fonts.css'

const NavMenuBottom = styled.div`
height: 75px;
bottom: 1rem;
position: absolute;
/* text-align: center; */
width: 100%;
`
const NavMenuBottom_svgContainer = styled.div`
    height: 100%;
    max-height: 75px;
    min-height: 65px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    min-width: 0;
    min-height: 0;
`
const NavMenuTop = () => (
  <NavMenuBottom>
    <NavMenuBottom_svgContainer>
      <NavMenuSVG/>
    </NavMenuBottom_svgContainer>

  </NavMenuBottom>
);

export default NavMenuTop;
