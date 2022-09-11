import React from 'react';
import Layout from './components/layout/layout';
import styles from './App.module.css';
import HomePageSection from './components/homepage/homepage';
import LatestPosts from './components/latest-posts/latestPosts';
import Changelog from './components/changelog/changelog';

function App() {
  return (
    <main className='App__Container'>
      <Layout>
        <section className={styles.Container}>
          <HomePageSection />
          <LatestPosts />
          <Changelog />
        </section>
      </Layout>
    </main>
  );
}

export default App;
