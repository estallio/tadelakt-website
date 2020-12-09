import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';

import styles from './Layout.module.sass';

const Layout = ({
  headerBackground = null,
  title,
  renderHeader = true,
  contact,
  children,
}) => (
  <>
    <HeadDependencies />
    <div className={styles.site}>
      {renderHeader ? (
        <Header background={headerBackground} title={title} />
      ) : null}
      <div id="main" className={styles.main}>
        <div className={styles.center}>{children}</div>
      </div>
      <Footer contact={contact} />
    </div>
  </>
);

Layout.propTypes = {
  renderHeader: PropTypes.bool,
  contact: PropTypes.object,
};

export default Layout;

const HeadDependencies = () => (
  <Head>
    {/* For responsiveness */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* For google fonts */}
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
      rel="stylesheet" /* font-family: 'Abel', sans-serif; */
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Encode+Sans+Semi+Condensed&display=swap"
      rel="stylesheet" /* font-family: 'Encode Sans Semi Condensed', sans-serif; */
    />
    {/* Favicon for old IEs */}
    <link rel="shortcut icon" href="/theme/favicons/favicon.ico" />
    {/* Favicon for new browsers - multisize ico */}
    <link
      rel="icon"
      type="image/x-icon"
      sizes="16x16 32x32"
      href="/theme/favicons/favicon.ico"
    />
    {/* Favicon for iPad with high-resolution Retina display running iOS ≥ 7: */}
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/theme/favicons/favicon-152-precomposed.png"
    />
    {/* Favicon for iPad with high-resolution Retina display running iOS ≤ 6: */}
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/theme/favicons/favicon-144-precomposed.png"
    />
    {/* Favicon for iPhone with high-resolution Retina display running iOS ≥ 7: */}
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/theme/favicons/favicon-120-precomposed.png"
    />
    {/* Favicon for iPhone with high-resolution Retina display running iOS ≤ 6: */}
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/theme/favicons/favicon-114-precomposed.png"
    />
    {/* Favicon for iPhone 6+ */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/theme/favicons/favicon-180-precomposed.png"
    />
    {/* Favicon for first- and second-generation iPad: */}
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="/theme/favicons/favicon-72-precomposed.png"
    />
    {/* Favicon for non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="/theme/favicons/favicon-57.png"
    />
    {/* Favicon for Old Chrome */}
    <link rel="icon" sizes="32x32" href="/theme/favicons/favicon-32.png" />
    {/* Favicon for IE10 Metro */}
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="favicon-144.png" />
    <meta name="theme-color" content="#ffffff" />
    {/* Favicon for Chrome for Android */}
    <link rel="manifest" href="/theme/favicons/manifest.json" />
    <link rel="icon" sizes="192x192" href="/theme/favicons/favicon-192.png" />
  </Head>
);
