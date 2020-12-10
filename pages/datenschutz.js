import React from 'react';

import classNames from 'classnames';

import Meta from '../components/Meta';
import Layout from '../components/Layout';

import styles from './index.module.sass';

const Privacy = () => (
  <>
    <Meta
      title="Datenschutz"
      description="mao - mineralische architektur oberflächen - bietet..."
    />
    <Layout title="Datenschutz" preview={false} contact={{}}>
      <div className={classNames(styles.container)}>
        <h2>Inforamtionen zum Datenschutz</h2>
        <p className={styles.subText}>Bla bla bla...</p>
        <p>
          Diese marokkanische Kalkputztechnik verbindet Ästhetik und
          Wirksamkeit. Aus leicht hydraulischem Kalkmörtel hergestellt und mit
          allen kalkechten Pigmenten färbbar, lassen sich Räume mit Tadelakt
          fugenlos und monolithisch gestalten. Mehrere Glätt- und
          Verdichtungsvorgänge sowie eine abschließende Verseifung des Putzes
          schaffen eine fühlbar glatte.
        </p>
      </div>
    </Layout>
  </>
);

export default Privacy;
