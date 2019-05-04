import React           from 'react';
import PropTypes       from 'prop-types';
import Helmet          from 'react-helmet';
import { StaticQuery } from 'gatsby';
import { graphql }     from 'gatsby';


import '../assets/scss/main.scss';


export default function Layout({ children, location }) {
  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              description,
              keywords
            }
          }
        }
      `}
      render={data => (
        <React.Fragment>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {content}
        </React.Fragment>
      )}
    />
  )
};


Layout.propTypes = {
  children: PropTypes.node.isRequired
};
