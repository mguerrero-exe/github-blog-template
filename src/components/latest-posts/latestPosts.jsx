import React from 'react';
import TextCard from '../cards/textCard';
import styles from './latestPosts.module.css';

const LatestPosts = () => {
  const Items = [
    {
      category: 'Products',
      title: 'Research: quantifying GitHub Copilot’s impact on developer productivity and happiness',
      content:
        'When the GitHub Copilot Technical Preview launched just over one year ago, we wanted to know one thing: Is this tool helping developers? The GitHub Next team conducted research using a combination of surveys and experiments, which led us to expected and unexpected answers.',
      username: 'Eirini Kalliamvakou',
      date: 'September 7, 2022',
    },
    {
      category: 'Community',
      title: 'Join us for OctogatosConf 2022',
      content:
        'Live on September 15, 2022, with talks by industry experts in Spanish, Portuguese, and English, on topics including software development, security, technical project management, community, open source, professional development and best practices.',
      username: 'Andrea Griffiths',
      date: 'September 6, 2022',
    },
    {
      category: 'Engineering',
      title: 'Contributing to open source at GitHub',
      content: 'A software engineer’s personal journey to becoming an open source contributor.',
      username: 'Ariel Deitcher',
      date: 'September 6, 2022',
    },
    {
      category: 'Community',
      title: 'Release Radar · August 2022 Edition',
      content:
        "We've been gearing up to launch GitHub Universe 2022 and our community has been launching cool projects left right and center.  These projects include everything from world-changing technology to developer",
      username: 'Michelle Mannering',
      date: 'September 2, 2022',
    },
  ];
  return (
    <section className={styles.LatestPosts__Container}>
      <h2 className={styles.LatestPosts__Title}>Latest Posts</h2>
      <section className={styles.LatestPosts__Content}>
        {Items.map((item, i) => (
          <TextCard item={item} key={i} />
        ))}
      </section>
    </section>
  );
};

export default LatestPosts;
