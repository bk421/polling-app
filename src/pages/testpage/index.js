import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavMenuLinkContent from '../../components/NavMenu/NavMenuLinkContent';
import MenuButtonComponent from '../../components/NavMenu/MenuButton';
import MenuExpander from '../../components/NavMenu/MenuExpander';

import '../../fonts/_fonts.css'

const DummyPage = styled.div`
    height: ${props => props.menuOpen ? '10px' : '100%'};
    background-color : white;
    color: black;
    font-family: Arial;
    font-size: 36px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 50rem;
`

class testpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <div>
        <MenuButtonComponent menuOpen={this.state.menuOpen} menuOpenToggleFunc={this.toggleMenu} />
        <MenuExpander menuOpen={this.state.menuOpen} />
        <DummyPage menuOpen={this.state.menuOpen}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus sollicitudin dolor, ac tincidunt nisl ullamcorper tempor. Fusce a dapibus dolor. Morbi iaculis ex id viverra laoreet. Fusce non erat ligula. Cras commodo vitae erat quis tincidunt. Morbi semper eget erat quis congue. Donec sed placerat neque, vel hendrerit neque. Donec arcu purus, hendrerit sed laoreet et, iaculis sed mi. Aenean et metus eget leo cursus bibendum. Donec massa felis, euismod a congue vitae, ultrices sit amet turpis. Fusce congue ullamcorper massa, vel aliquet augue tincidunt sed.</p>
          <p>Donec vestibulum faucibus augue, at egestas erat lacinia sed. Donec blandit, metus at iaculis vulputate, orci dui gravida est, et tempus urna neque eget turpis. Fusce ultrices ac leo a iaculis. Cras metus dui, ultrices non euismod at, lobortis at turpis. Praesent fringilla enim sit amet justo dignissim sagittis. Aliquam lobortis dolor at lorem hendrerit, sit amet blandit lectus consectetur. Aenean egestas nec odio sit amet posuere. Nam ac tortor id felis dapibus tincidunt eu vitae velit. Nam interdum elementum porttitor. Donec tempus posuere diam vitae malesuada. Cras pretium consectetur massa, sit amet sodales risus faucibus et. Aliquam tincidunt tempor risus, vel porttitor arcu consectetur in.</p>
          <p>Aenean leo ex, scelerisque quis efficitur egestas, auctor nec dolor. Praesent ullamcorper placerat tellus vestibulum dignissim. Mauris enim turpis, pharetra et aliquet lacinia, feugiat eu mi. Aenean porttitor pellentesque posuere. Morbi luctus efficitur est, ac iaculis tortor accumsan id. Suspendisse et ultricies lectus, et pharetra tortor. Cras turpis sem, mollis in porta in, porttitor sit amet elit.</p>
        </DummyPage>
        <NavMenuLinkContent menuOpen={this.state.menuOpen} />
      </div>
    )
  };
};

export default testpage;
