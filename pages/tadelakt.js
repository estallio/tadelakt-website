import React, { useState } from 'react';

import classNames from 'classnames';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Lightbox from 'react-image-lightbox';

import Link from '../components/Link';

import Meta from '../components/Meta';
import Layout from '../components/Layout';

import styles from './index.module.sass';

import path from 'path';
import fs from 'fs';

export async function getStaticProps() {
  const directory = path.join(process.cwd(), 'public', 'images', 'tadelakt');
  const filenames = fs.readdirSync(directory);
  const imageFileNames = filenames.filter((filename) =>
    filename.match(/\.(jpe?g|jpg|png|gif|svg)$/i)
  );

  const images = imageFileNames.map((filename) => ({
    src: `/images/tadelakt/${filename}`,
    title: filename.split('---')[0],
    // description: `Beschreibung ${i} mit sehr langer beschreibung und noch mehr`,
  }));

  return {
    props: {
      images,
    },
  };
}

const Tadelakt = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <Meta
        title="Tadelakt"
        description="Diese marokkanische Kalkputztechnik verbindet Ästhetik und Wirksamkeit. Aus leicht hydraulischem Kalkmörtel hergestellt und mit allen kalkechten Pigmenten färbbar, lassen sich Räume mit Tadelakt fugenlos und monolithisch gestalten."
      />
      <Layout
        title="Tadelakt"
        headerBackground={`#365678 url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%231d3347' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`}
      >
        <Link href="/">
          <a className={styles.more}>
            <p>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{
                  verticalAlign: 'sub',
                  width: 20,
                  height: 20,
                  marginTop: 15,
                }}
              />{' '}
              Zurück
            </p>
          </a>
        </Link>
        <div className={classNames(styles.container, styles.centerChilds)}>
          <div className={classNames(styles.twoThird, styles.left)}>
            <h2>Tadelakt</h2>
            <p className={styles.subText}>Kalkputztechnik aus Marokko</p>
            <p>
              Diese marokkanische Kalkputztechnik verbindet Ästhetik und
              Wirksamkeit. Aus leicht hydraulischem Kalkmörtel hergestellt und
              mit allen kalkechten Pigmenten färbbar, lassen sich Räume mit
              Tadelakt fugenlos und monolithisch gestalten.
            </p>
            <p>
              Mehrere Glätt- und Verdichtungsvorgänge sowie eine abschließende
              Verseifung des Putzes schaffen eine fühlbar glatte, seidig
              glänzende Oberfläche.
            </p>
            <p>
              Aufgrund seiner hydrophoben Eigenschaften und seiner besonderen
              Haptik empfehlen wir Tadelekt für die Gestaltung des
              Sanitärberechs oder zur Beschichtung von Öfen und Heizwänden.
            </p>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
            imageTitle={images[photoIndex].title}
            imageCaption={images[photoIndex].description}
          />
        )}
        <br />
        <div style={{ paddingBottom: 40, overflow: 'auto' }}>
          {images.map((item, i) => (
            <div key={i} className={styles.gridItem}>
              <a
                onClick={() => {
                  setPhotoIndex(i);
                  setIsOpen(true);
                }}
              >
                <img
                  src={require(`../public${item.src}?resize&size=200`)}
                  className={styles.gridImage}
                />
              </a>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Tadelakt;
