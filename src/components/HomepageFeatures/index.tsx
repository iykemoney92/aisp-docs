import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '🎯 Easy to Get Started',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Create your account in seconds with email or Google sign-in. Get <strong>30 free credits</strong> and
        a <strong>3-day trial</strong> to explore all features. Chat is <strong>always FREE</strong> for everyone!
      </>
    ),
  },
  {
    title: '🚀 Powerful AI Features',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Generate images (10 credits), create videos (50 credits), produce music and sound effects (25 credits),
        build custom AI agents, and organize everything in projects. All powered by cutting-edge AI models.
      </>
    ),
  },
  {
    title: '💰 Flexible Pricing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Pay only for what you use with credits, or subscribe for unlimited generations.
        Earn free credits through referrals (30 credits each), daily check-ins, and watching ads (2 credits).
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
