import React, { useState } from 'react';

import Meta from '../components/Meta';
import Layout from '../components/Layout';

import styles from './index.module.sass';

import Lightbox from 'react-image-lightbox';
import classNames from 'classnames';

const breakpointColumnsObj = {
  default: 4,
  1200: 3,
  768: 2,
  480: 1,
};

const projects = new Array(40).fill().map((item, i) => ({
  title: `Projekttitel ${i}`,
  description: `Beschreibung ${i} mit sehr langer beschreibung und noch mehr Beschreibung ${i} mit sehr langer beschreibung und noch mehr Beschreibung ${i} mit sehr langer beschreibung und noch mehr`,
  titleImage: `media/images/arbeit1.jpg`,
  slug: Math.round(Math.random() * 1000),
}));

const Work = () => {
  return (
    <>
      <Meta
        title="Arbeit"
        description="mao - mineralische architektur oberflächen - bietet..."
      />
      <Layout
        headerBackground="url(media/images/tadelakt.jpg)"
        title="Arbeit"
        preview={false}
        contact={{}}
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            className={classNames(
              styles.container,
              styles.rowContainer,
              styles.centerChilds
            )}
          >
            <div
              className={classNames(
                styles.oneThird,
                styles.left,
                styles.smallImage
              )}
            >
              <a href="arbeit/abc" key={project.slug}>
                <img src={project.titleImage} />
              </a>
            </div>
            <div className={classNames(styles.twoThird, styles.right)}>
              <a key={project.slug}>
                <h2>{project.title}</h2>
              </a>
              <p>{project.description}</p>
              <a key={project.slug}>
                <p>Mehr erfahren...</p>
              </a>
            </div>
          </div>
        ))}
      </Layout>
    </>
  );
};

export default Work;
