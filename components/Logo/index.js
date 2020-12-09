import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import Link from '../Link';

import styles from './Logo.module.sass';

const Logo = ({ simple = false }) => (
  <div className={classNames(styles.logo, simple ? styles.simple : null)}>
    <Link href="/">
      <a>
        {simple ? (
          <img
            src="/theme/images/logo-simple.svg"
            alt="Vereinfachtes Logo von mao - mineralische architektur oberflächen auf tadelakt.at"
          />
        ) : (
          <img
            src="/theme/images/logo.svg"
            alt="Logo von mao - mineralische architektur oberflächen auf tadelakt.at"
          />
        )}
      </a>
    </Link>
  </div>
);

Logo.propTypes = {
  simple: PropTypes.bool,
};

export default Logo;
