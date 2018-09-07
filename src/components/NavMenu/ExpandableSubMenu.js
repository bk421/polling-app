import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const StyledLink = styled(Link)`
  text-decoration: none;
`
const SubMenuContainer = styled.div`
  padding: 0 18px;
  text-align:center;
  overflow:hidden;
  max-height: ${props => (props.submenuExpanded ? '200px' : '0')};
  transition:max-height 0.3s ease-out; // note that we're transitioning flex, not height!
`
const SubLinkHeader = styled.h2`
  color: ${props => props.menuTextColor ? props.menuTextColor : 'black'};
  font-family: ${props => props.menuTextColor ? props.fontfamily : "Arial"};
  font-size: 4vh;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
`

const ExpandableSubMenu = (props) => (
  <SubMenuContainer submenuExpanded={props.submenuExpanded} >
    {props.sublinks.map(sublinks => (
        <StyledLink to={sublinks.href}>
          <SubLinkHeader key={sublinks.mykey} menuTextColor={props.menuTextColor} fontfamily={props.fontfamily}>{sublinks.linktext}</SubLinkHeader>
        </StyledLink>
      ))}
  </SubMenuContainer>
);

export default ExpandableSubMenu;
