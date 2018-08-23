import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuExpanderWrapper = styled.div`
  background-color: transparent;
  position:fixed;
  width: 100%;
  bottom: 1rem;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const MenuExpanderContent = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`;
const MenuExpanderEffect = styled.div`
background-color: #6CD1EF;
width: 96%;
height: 96%;
position: absolute;
border-radius: 50%;
z-index: 1000;
transform: scale(${props => props.menuOpen ? '70' : '1'});
transition: all 1.0s cubic-bezier(.61,.23,.47,.9);
`;

const MenuExpander = (props) => (
  <MenuExpanderWrapper>
    <MenuExpanderContent>
      <MenuExpanderEffect menuOpen={props.menuOpen} />
    </MenuExpanderContent>
  </MenuExpanderWrapper>
);

export default MenuExpander;
