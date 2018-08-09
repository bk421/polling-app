// ./src/layouts/index.js
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';

import Auth from '../containers/Auth';
import Header from '../components/Header';

import './index.css';

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #fff;
  font-family: Helvetica Neue, arial, sans-serif;
  color: #000;
  overflow: hidden;
`;

const TemplateWrapper = ({ children, data, ...props }) => (
  <Auth>
    {auth => {
      return (
        <div>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: 'Create polls for stuff and things',
              },
              { name: 'keywords', content: 'polling, rating' },
              { name: 'msapplication-TileColor', content: '#08AEEA' },
              { name: 'theme-color', content: '#2AF598' },
            ]}>
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href={withPrefix('/favicons/apple-touch-icon.png')}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href={withPrefix('/favicons/favicon-32x32.png')}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href={withPrefix('/favicons/favicon-16x16.png')}
            />
          </Helmet>
          <Header
            background="background-image: linear-gradient(116deg, #08AEEA 0%, #2AF598 100%)"
            title={data.site.siteMetadata.title}
            {...auth}
          />
          <Container>
            {children({
              ...props,
              ...auth,
            })}
          </Container>
        </div>
      );
    }}
  </Auth>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export const query = graphql`
  query NewAboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default TemplateWrapper;
