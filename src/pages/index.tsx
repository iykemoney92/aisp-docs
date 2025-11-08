import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to AI Studio Plus
        </Heading>
        <p className="hero__subtitle">
          Your all-in-one AI platform for chat, images, video, sound, and intelligent agents
        </p>
        <p className="hero__subtitle" style={{fontSize: '1.1rem', marginTop: '1rem', opacity: 0.9}}>
          💬 Free Chat • 🎨 AI Images • 🎬 Video Generation • 🎵 Sound Creation • 🤖 AI Agents
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/introduction">
            📖 Documentation
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="https://studio.aisp.app"
            style={{marginLeft: '1rem'}}>
            🚀 Launch App
          </Link>
        </div>
        <div style={{marginTop: '2rem', fontSize: '0.9rem', opacity: 0.8}}>
          <p>
            ✨ <strong>30 Free Credits</strong> on signup •
            🎁 <strong>3-Day Trial</strong> with unlimited access •
            💬 <strong>Chat is Always FREE</strong>
          </p>
        </div>
      </div>
    </header>
  );
}

function QuickStart() {
  return (
    <section style={{padding: '4rem 0', background: 'var(--ifm-background-surface-color)'}}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h2">Quick Start Guide</Heading>
            <p style={{fontSize: '1.1rem', marginBottom: '3rem', color: 'var(--ifm-color-emphasis-700)'}}>
              Get started with AI Studio Plus in minutes
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col col--3 text--center">
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>1️⃣</div>
            <Heading as="h3">Create Account</Heading>
            <p>Sign up with email or Google - it's quick and easy</p>
            <Link to="/getting-started/account-setup">Learn More →</Link>
          </div>
          <div className="col col--3 text--center">
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>2️⃣</div>
            <Heading as="h3">Explore Features</Heading>
            <p>Free chat, AI images, videos, sound, and more</p>
            <Link to="/getting-started/interface-overview">See Interface →</Link>
          </div>
          <div className="col col--3 text--center">
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>3️⃣</div>
            <Heading as="h3">Understand Pricing</Heading>
            <p>Chat is FREE! Pay only for what you generate</p>
            <Link to="/getting-started/pricing-credits">View Pricing →</Link>
          </div>
          <div className="col col--3 text--center">
            <div style={{fontSize: '3rem', marginBottom: '1rem'}}>4️⃣</div>
            <Heading as="h3">Start Creating</Heading>
            <p>Use your trial credits and start making AI magic</p>
            <Link to="https://studio.aisp.app">Launch App →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PopularTopics() {
  const topics = [
    { title: '💬 Chat', link: '/features/chat', desc: 'Free conversations with GPT-4, Claude, Gemini' },
    { title: '🎨 Image Generation', link: '/features/images', desc: '10 credits per image, multiple AI models' },
    { title: '🎬 Video Creation', link: '/features/video', desc: 'Generate videos from text prompts' },
    { title: '🎵 Sound & Music', link: '/features/sound', desc: 'Create music, effects, and speech' },
    { title: '🤖 AI Agents', link: '/features/agents', desc: 'Build and use custom AI assistants' },
    { title: '📁 Projects', link: '/features/projects', desc: 'Organize your AI creations' },
  ];

  return (
    <section style={{padding: '4rem 0'}}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <Heading as="h2">Popular Topics</Heading>
            <p style={{fontSize: '1.1rem', marginBottom: '3rem', color: 'var(--ifm-color-emphasis-700)'}}>
              Explore what AI Studio Plus can do
            </p>
          </div>
        </div>
        <div className="row">
          {topics.map((topic, idx) => (
            <div key={idx} className="col col--4" style={{marginBottom: '2rem'}}>
              <div className="card" style={{height: '100%'}}>
                <div className="card__header">
                  <Heading as="h3">{topic.title}</Heading>
                </div>
                <div className="card__body">
                  <p>{topic.desc}</p>
                </div>
                <div className="card__footer">
                  <Link to={topic.link}>Learn More →</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="AI Studio Plus Documentation - Learn how to use your all-in-one AI platform for chat, images, video, sound, and agents">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickStart />
        <PopularTopics />
      </main>
    </Layout>
  );
}
