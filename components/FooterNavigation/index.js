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
        <span>Florianigasse 5, 4943 Geinberg</span>
      </li>
      <li>
        <span>Tel.: +436692839050</span>
      </li>
      <li>IBAN: AT20 4480 0300 1690 0100</li>
    </ul>
    <ul>
      <li>
        <Link href="/ueber-uns" defaultClass={styles.menuEntry}>
          <a>
            <span>Über uns</span>
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
