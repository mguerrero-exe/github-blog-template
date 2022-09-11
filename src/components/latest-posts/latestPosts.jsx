import React from 'react';
import TextCard from '../cards/textCard';
import styles from './latestPosts.module.css';

const LatestPosts = () => {
  const Items = [
    {
      category: 'Products',
      title: 'Research: quantifying GitHub Copilot’s impact on developer productivity and happiness',
      content: 'When the GitHub Copilot Technical Preview launched just over one year ago, we wanted to know one thing: Is this tool helping developers? The GitHub Next team conducted research using a combination of surveys and experiments, which led us to expected and unexpected answers.',
      username: 'Ben De St Paer-Gotch',
      date: 'September 1, 2022',
    },
    {
      category: 'Community',
      title: 'Join us for OctogatosConf 2022',
      content:
        'Live on September 15, 2022, with talks by industry experts in Spanish, Portuguese, and English, on topics including software development, security, technical project management, community, open source, professional development and best practices.',
      username: 'Jeimy Ruiz',
      date: 'August 31, 2022',
    },
    {
      category: 'Engineering',
      title: 'GitHub Copilot now available for teachers',
      content:
        'After a year in technical preview, GitHub Copilot, an AI pair programmer, is now free for all teachers verified on GitHub Global Campus.',
      username: 'Elise Hollowed & Andrew Rice',
      date: 'September 8, 2022',
    },
    {
      category: 'Education',
      title: 'GitHub Copilot now available for teachers',
      content:
        'After a year in technical preview, GitHub Copilot, an AI pair programmer, is now free for all teachers verified on GitHub Global Campus.',
      username: 'Ariel Deitcher',
      date: 'September 8, 2022',
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
