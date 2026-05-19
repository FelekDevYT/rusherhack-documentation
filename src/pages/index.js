import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  return (
    <Layout description="Documentation for all things related to RusherHack.">
      <main className={styles.hero}>
        <div className="container">
          <div className={styles.heroRow}>
            <div className={styles.heroCol}>
              <h1 className={styles.heroTitle}>RusherHack</h1>
              <p className={styles.heroSubtitle}>Documentation for all things related to RusherHack.</p>
              <div className={styles.heroButtons}>
                <Link className="button button--primary button--lg" to="/docs/intro">
                  Get started
                </Link>
                <Link className={`button button--secondary button--lg ${styles.buttonPurchase}`} to="https://rusherhack.org">
                  Purchase
                </Link>
              </div>
            </div>
            <div className={styles.heroCol}>
              <div className={styles.imageWrapper}>
                <div className={styles.glow} />
                <img 
                  src={useBaseUrl('/img/rusher-logo.png')} 
                  className={styles.heroImage} 
                  alt="RusherHack Logo" 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}