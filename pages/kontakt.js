import React from 'react';

import {
  faPhoneSquareAlt,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsappSquare,
  faFacebookSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames';

import Meta from '../components/Meta';
import Layout from '../components/Layout';

import styles from './index.module.sass';

const Contact = () => (
  <>
    <Meta
      title="Kontakt"
      description="Hier finden Sie unsere Kontaktdaten für weitere Informationen und Anfragen zu Projekten rund um Tadelakt, Lehmputz und Herstellung und Restaurierung von alten Oberflächen und Gegenständen. Gerne wickeln wir Projekte im Raum Braunau am Inn, Ried im Innkreis bis nach Salzburg ab. Sie erreichen uns unter der angegebenen Telefonnummer."
    />
    <Layout
      title="Kontakt - So erreichen Sie uns"
      headerBackground={`#7b2614 url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23bc4f26' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");`}
    >
      <div
        className={classNames(
          styles.container,
          styles.rowContainer,
          styles.centerChilds
        )}
      >
        <div
          className={classNames(
            styles.oneHalf,
            styles.left,
            styles.smallImage,
            styles.extraSmallImage,
            styles.marginBottom,
            styles.mobileMarginTop
          )}
        >
          <img src="/images/arbeit.jpg" />
          <h2>Anfragen</h2>
          <p className={styles.subText}>Jederzeit für Sie erreichbar</p>
          <p>
            Egal ob Badoberflächen, Kirchenrestaurierungen oder Arbeiten im
            künsterlischen Bereich, hinterlassen Sie uns eine Nachricht per
            Whatsapp bzw. Email oder rufen Sie uns einfach an. Gerne können wir
            einen Termin zu nötigen etwaigen Besichtigungen, Besprechungen und
            Beratungen vereinbaren.
          </p>
        </div>
        <div
          className={classNames(styles.icons, styles.twoThird, styles.right)}
        >
          <p className={styles.iconText}>
            <a>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPhoneSquareAlt} />
              </div>
              <span>+43 66023 182305</span>
            </a>
          </p>
          <p className={styles.iconText}>
            <a>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelopeSquare} />
              </div>
              <span>manfred.wegenschimmel@gmail.com</span>
            </a>
          </p>
          <p className={styles.iconText}>
            <a>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faWhatsappSquare} />
              </div>
              <span>+43 32403 32423</span>
            </a>
          </p>
          <p className={styles.iconText}>
            <a>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
              <span>@tadelakt</span>
            </a>
          </p>
          <p className={styles.iconText}>
            <a>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faInstagramSquare} />
              </div>
              <span>@tadelakt</span>
            </a>
          </p>
        </div>
      </div>
    </Layout>
  </>
);

export default Contact;
