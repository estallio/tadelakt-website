import React from 'react';

import classNames from 'classnames';

import Meta from '../components/Meta';
import Layout from '../components/Layout';

import styles from './index.module.sass';

const AboutUs = () => (
  <>
    <Meta
      title="Über uns"
      description="Unser Team besteht aus Manfred Wegenschimmel und Reinhold Bartosch. Auch wenn jeder von uns schon viele Projekte alleine umgesetzt hat, so arbeiten wir doch immer wieder zusammen und ergänzen uns gegenseitig."
    />
    <Layout
      title="Über uns - Das Team und noch mehr"
      headerBackground={`#7b2614 url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23bc4f26' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`}
    >
      <div className={classNames(styles.container)}>
        <div className={classNames(styles.twoThird, styles.left)}>
          <h2>Zusammenarbeit</h2>
          <p className={styles.subText}>Mit vereinten Kräften</p>
          <p>
            Wir, Manfred und Reinhold, kennen uns schon lange und haben schon
            viele Aufträge zusammen umgesetzt. Durch die langjährige Tätigkeit
            als Einzelunternehmer bringen wir viel Erfahrung mit und können uns
            sehr gut ergänzen. Da man bei den allermeisten Aufträgen nicht alles
            ganz alleine machen kann, haben wir zu dem eine lange Liste and
            Partnern, die uns z.B. helfen Ihr Bad neu zu gestalten. Neben
            Aufträgen nehmen wir uns auch oft Zeit, kreative Ansätze zu
            verfolgen und unsere künstlerische Seite zu zeigen. Da wir große
            Teile unserer Freizeit dem Künstlerischen widmen, können auch
            kreative Werke hier auf der Seite unter dem Reiter Arbeit betrachtet
            werden. Sollten Sie interesse haben, scheuen Sie sich nicht, einen
            von uns beiden zu kontaktieren:
          </p>
        </div>
      </div>
      <div className={styles.twoGrid}>
        <div className={classNames(styles.container, styles.centerChilds)}>
          <div className={classNames(styles.smallImage)}>
            <img src="/images/manfred.jpg" />
          </div>
          <div className={classNames(styles.twoThird, styles.right)}>
            <h2>Manfred Wegenschimmel</h2>
            <p className={styles.subText}>Florianigasse 5 · A-4943 Geinberg</p>
            <p className={styles.subText}>+43 676 625 86 29</p>
            <p className={styles.subText}>m.wegenschimmel@gmail.com</p>
          </div>
        </div>
        <div className={classNames(styles.container, styles.centerChilds)}>
          <div className={classNames(styles.smallImage)}>
            <img src="/images/reinhold.jpg" />
          </div>
          <div className={classNames(styles.twoThird, styles.left)}>
            <h2>Reinhold Bartosch</h2>
            <p className={styles.subText}>Auerbach 18 · A-5224 Auerbach</p>
            <p className={styles.subText}>+43 664 956 99 1 1</p>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
    </Layout>
  </>
);

export default AboutUs;
