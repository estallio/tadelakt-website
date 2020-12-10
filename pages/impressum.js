import React from 'react';

import classNames from 'classnames';

import Meta from '../components/Meta';
import Layout from '../components/Layout';

import styles from './index.module.sass';

const Imprint = () => (
  <>
    <Meta
      title="Impressum"
      description="Rechtliche Informationen wem diese Website gehört und wer zuständig ist für Informationen und Auskünfte."
    />
    <Layout
      title="Impressum"
      headerBackground={`#7b2614 url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23bc4f26' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`}
    >
      <div className={classNames(styles.container)}>
        <p className={styles.h2downText}>Name:</p>
        <p>Manfred Wegenschimmel</p>
        <p className={styles.h2downText}>Unternehmensgegenstand:</p>
        <p>Freiberuflicher Restaurator und Künstler</p>
        <p className={styles.h2downText}>Tätigkeiten: </p>
        <p>
          Restaurierungen und historisch mineralische Architekturoberflächen,
          künstlerische und freischaffende Tätigkeiten
        </p>
        <p className={styles.h2downText}>Adresse: </p>
        <p>Florianigasse 5</p>
        <p>4943 Geinberg</p>
      </div>
    </Layout>
  </>
);

export default Imprint;
