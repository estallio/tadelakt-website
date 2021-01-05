import React from 'react';

import classNames from 'classnames';

import Meta from '../components/Meta';
import Layout from '../components/Layout';

import styles from './index.module.sass';

const Privacy = () => (
  <>
    <Meta
      title="Datenschutz"
      description="Alle rechtlichen Informationen zu unserer Website können Sie auf dieser Seite nachlesen."
    />
    <Layout
      title="Datenschutz"
      headerBackground={`#7b2614 url("/theme/images/alternative-header-background.png")`}
    >
      <div className={classNames(styles.container)}>
        <h2>Erklärung zur Informationspflicht</h2>
        <p className={styles.subText}>(Datenschutzerklärung)</p>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
          Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der
          gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen
          Datenschutzinformationen informieren wir Sie über die wichtigsten
          Aspekte der Datenverarbeitung im Rahmen unserer Website. Beim Besuch
          unserer Webseite wird Ihre IP-Adresse, Beginn und Ende der Sitzung für
          die Dauer dieser Sitzung erfasst. Dies ist technisch bedingt und
          stellt damit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO
          dar. Soweit im Folgenden nichts anderes geregelt wird, werden diese
          Daten von uns nicht weiterverarbeitet.
        </p>
        <p>
          Kontakt mit uns Wenn Sie per Formular auf der Website oder per E-Mail
          Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks
          Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs
          Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.
        </p>
        <p>
          Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um
          kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät
          abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies
          dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies
          bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie
          ermöglichen es uns, Ihren Browser beim nächsten Besuch
          wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren
          Browser so einrichten, dass er Sie über das Setzen von Cookies
          informiert und Sie dies nur im Einzelfall erlauben. Bei der
          Deaktivierung von Cookies kann die Funktionalität unserer Website
          eingeschränkt sein.
        </p>
        <p>
          Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich
          die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
          Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben,
          dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt
          oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise
          verletzt worden sind, können Sie sich bei uns oder der
          Datenschutzbehörde beschweren. Sie finden mehrer Kontaktmöglichkeiten
          auf der Kontaktseite.
        </p>
      </div>
    </Layout>
  </>
);

export default Privacy;
