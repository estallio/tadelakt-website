import React from 'react';

import classNames from 'classnames';

import Meta from '../components/Meta';
import Header from '../components/Header';
import Layout from '../components/Layout';

import styles from './index.module.sass';
import Link from '../components/Link';

const Home = () => (
  <>
    <Meta
      title="Startseite"
      description="Herzlich willkommen auf unserer Website! Hier finden eine kurze Beschreibung von unseren Arbeiten im Bereich Tadelakt, Lehmputz, sowie Herstellung und Restaurierung alter Wände und Oberflächen. Des weiteren finden Sie hier Bilder von einigen unserer Projekte, welche im Raum Braunau am Inn, Ried im Innkreis bis nach Salzburg durchgeführt wurden."
    />
    <Header>
      <div className={styles.center}>
        <img src="/theme/images/header-logo.svg" alt="I-Ging 64 Symbol" />
      </div>
    </Header>
    <Layout renderHeader={false}>
      <div
        className={classNames(
          styles.container,
          styles.rowContainer,
          styles.centerChilds
        )}
      >
        <div className={classNames(styles.twoThird, styles.left)}>
          <h2>Willkommen auf unserer Website!</h2>
          <p className={styles.subText}>Handwerk und Kunst vereint</p>
          <p>
            Wir, Manfred Wegenschimmel und Reinhold Bartosch, haben uns ganz der
            Herstellung und Bearbeitung mineralischer Architektur-Oberflächen
            verschrieben. Unsere Arbeit umfasst dabei die Beratung, Planung und
            Umsetzung kleinerer und größerer Projekte. Wir bieten unsere Dienste
            vor allem im Bezirk Braunau am Inn und Ried im Innkreis an, unser
            Kundenkreis reicht jedoch bis nach Linz und Salzburg. Durch unsere
            langjährige Erfahrung sind wir spezialisiert auf Tadelakt, Lehmputz
            und die Herstellung und Restaurierung alter mineralischer
            Oberflächen. Welche Eigenschaften Tadelakt oder Lehmputz haben kann
            erfahren Sie in diesen drei Punkten:
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <Link href="/tadelakt">
          <a>
            <div className={styles.listing}>
              <div className={styles.image}>
                <img src="/images/tadelakt.jpg" />
              </div>
              <div className={styles.text}>
                <h3>Tadelakt - Kalkputztechnik aus Marokko</h3>
                Diese marokkanische Kalkputztechnik verbindet Ästhetik und
                Wirksamkeit. <p className={styles.more}>Mehr erfahren...</p>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/lehmputz">
          <a>
            <div className={styles.listing}>
              <div className={styles.image}>
                <img src="/images/lehmputz.jpg" />
              </div>
              <div className={styles.text}>
                <h3>
                  Lehmputz - Feuchtigkeitsregulierend individuell gesatltbar
                </h3>
                Lehm ist der älteste mineralische Baustoff der Menschheit.{' '}
                <p className={styles.more}>Mehr erfahren...</p>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/herstellung-und-restaurierung">
          <a>
            <div className={styles.listing}>
              <div className={styles.image}>
                <img src="/images/herstellung-und-restaurierung.jpg" />
              </div>
              <div className={styles.text}>
                <h3>
                  Herstellung und Restaurierung mineralischer
                  Architekturoberflächen
                </h3>
                Natürliche Materialien haben einen Alterswert, den wir sowohl
                schützen als auch ästhetisch hervorheben möchten.{' '}
                <p className={styles.more}>Mehr erfahren...</p>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div
        className={classNames(
          styles.container,
          styles.rowContainer,
          styles.centerChilds,
          styles.extraSpace
        )}
      >
        <div
          className={classNames(
            styles.oneThird,
            styles.right,
            styles.smallerImage
          )}
        >
          <img src="/images/i-ging-64-logo.svg" />
        </div>
        <div className={classNames(styles.twoThird, styles.left)}>
          <div className={styles.igingText}>
            <h2>
              I-Ging 64<sup className={styles.h2upper}>We Dsi</sup>
            </h2>
            <p className={styles.subText}>Vor der Vollendung</p>
          </div>
          <span className={styles.h2downText}>
            ...denn die Dinge erschöpfen sich nicht...
          </span>
          <p>
            Die Botschafen in{' '}
            <span className={styles.h2downText}>
              I Ging - Das Buch der Wandlungen
            </span>{' '}
            haben für uns eine inspierierende Bedeutung. Die Aussagen und vor
            allem das Urteil, dass sich Dinge nicht erschöpfen können, geben der
            Kunst und dem Schaffen eine erweiterte Bedeutung. Aus diesem Kontext
            kann man das Symbol aus{' '}
            <span className={styles.h2downText}>
              I Ging - Vor der Vollendung. Gelingen.
            </span>{' '}
            auch in unserem Logo wiederfinden.
          </p>
        </div>
      </div>
    </Layout>
  </>
);

export default Home;
