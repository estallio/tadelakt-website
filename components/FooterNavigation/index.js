import React from 'react';

import Link from '../Link';

import styles from './FooterNavigation.module.sass';

const FooterNavigation = () => (
  <div className={styles.footerNavigation}>
    <ul>
      <li>
        <span>Manfred Wegenschimmel</span>
      </li>
      <li>
        <span>Geinberg 123</span>
      </li>
      <li>
        <span>+436692839050</span>
      </li>
      <li>IBAN: AT20 4480 0300 1690 0100</li>
    </ul>
    <ul>
      <li>
        <Link href="/agb" defaultClass={styles.menuEntry}>
          <a>
            <span>AGB</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/kontakt" defaultClass={styles.menuEntry}>
          <a>
            <span>Kontakt</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/impressum" defaultClass={styles.menuEntry}>
          <a>
            <span>Impressum</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/datenschutz" defaultClass={styles.menuEntry}>
          <a>
            <span>Datenschutz</span>
          </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default FooterNavigation;
