import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This section provides an overview of the InsightGig platform.
      </>
    ),
    link: '/docs/intro', // Specify the link for the feature
  },
  {
    title: 'Are you a Client?',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        If you commission projects that deliver insight, this is the section for you!
      </>
    ),
    link: '/docs/clients', // Specify the link for the feature
  },
  {
    title: 'Are you an Expert?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        If you deliver insights for clients, dive right in here!
      </>
    ),
    link: '/docs/experts', // Specify the link for the feature
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <Link to={link} className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featureList}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}