import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import classNames from 'classnames';

import Logo from '../Logo';
import MainNavigation from '../MainNavigation';

import styles from './Header.module.sass';

const Header = ({ backgroundImage = null, title = null, children = [] }) => (
  <>
    <div
      className={classNames(
        styles.header,
        !_.isEmpty(children) ? styles.banner : null
      )}
      style={
        !_.isEmpty(children) && backgroundImage
          ? { backgroundImage: backgroundImage }
          : {}
      }
    >
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Logo simple={!_.isEmpty(children)} />
        </div>
        <div className={styles.menu}>
          <MainNavigation lightColors={!_.isEmpty(children)} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
    {_.isEmpty(children) && (
      <div
        className={styles.titleBar}
        style={backgroundImage ? { backgroundImage: backgroundImage } : {}}
      >
        <div className={styles.inner}>{title}</div>
      </div>
    )}
  </>
);

Header.propTypes = {
  title: PropTypes.string,
  isBanner: PropTypes.bool,
};

export default Header;
