import React from 'react';

import classNames from 'classnames';

import Meta from '../components/Meta';
import Layout from '../components/Layout';

import styles from './index.module.sass';

const Imprint = () => (
  <>
    <Meta
      title="Impressum"
      description="mao - mineralische architektur oberflächen - bietet..."
    />
    <Layout title="Impressum" preview={false} contact={{}}>
      <div className={classNames(styles.container)}>
        <p>Manfred Wegenschimmel</p>
        <p>Freiberuflicher Restaurator und Künstler</p>
        <p>
          Restaurierungen und historisch mineralische Architekturoberflächen,
          künstlerische und freischaffende Tätigkeiten
        </p>
        <p>Florianigasse 5</p>
        <p>4943 Geinberg</p>
      </div>
    </Layout>
  </>
);

export default Imprint;
