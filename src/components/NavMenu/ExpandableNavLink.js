import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExpandableSubMenu from './ExpandableSubMenu';
import '../../fonts/_fonts.css';

const TopNavLink = styled.h2`
  color: ${props => props.menuTextColor ? props.menuTextColor : 'black'};
  font-family: ${props => props.menuTextColor ? props.fontfamily : "Arial"};
  font-size: 8.5vh;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
`
const NavLinksContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: auto;
`
class ExpandableNavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
    this.toggleSubMenu = this.toggleSubMenu.bind(this);
  };

  toggleSubMenu = () => {
    this.setState({ isExpanded: !this.state.isExpanded });
  };
  render() {
    return (
      <NavLinksContainer>
        <TopNavLink onClick={this.toggleSubMenu} menuTextColor={this.props.menuTextColor} fontfamily={this.props.fontfamily}>{this.props.pda.toplinktext}</TopNavLink>
        <ExpandableSubMenu submenuExpanded={this.state.isExpanded} sublinks={this.props.pda.sublinks} menuTextColor={this.props.menuTextColor} fontfamily={this.props.fontfamily} />
      </NavLinksContainer>
    )
  };
};

export default ExpandableNavLink;
