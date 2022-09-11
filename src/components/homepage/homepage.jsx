import React from 'react';
import CardMain from '../cards/cardMain';
import CardMedium from '../cards/cardMedium';
import CardMini from '../cards/cardMini';
import styles from './homepage.module.css';

const HomePageSection = () => {
  const item = {
    image:
      'https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000',
    category: 'Security',
    title: 'SCA vs SAST: what are they and which one is right for you?',
    content: "We're taking a look at two commonly-used security tools and detailing how they can help secure your projects.",
    userProfilePicture: 'https://torange.biz/photofxnew/76/HD/lion-profile-picture-76801.jpg',
    username: "Brittany O'Shea",
    date: 'September 9, 2022',
  };
  const rightItems = [
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg',
      category: 'Enterprise',
      title: 'GitHub Actions: introducing the new, larger GitHub-hosted runners beta',
      content: 'Now your team can spend less time managing infrastructure and more time writing code.',
      username: 'Ben De St Paer-Gotch',
      date: 'September 1, 2022',
    },
    {
      image: 'https://wallpaper.dog/large/10795761.jpg',
      category: 'Community',
      title: 'What you can expect at GitHub Universe 2022: cloud, security, community, and AI',
      content:
        'Register now to attend GitHub Universe virtually or in-person at the Yerba Buena Center for the Arts in San Francisco on November 9-10.',
      username: 'Jeimy Ruiz',
      date: 'August 31, 2022',
    },
    {
      image: 'https://cdnb.artstation.com/p/assets/video_clips/images/024/538/805/large/pixel-jeff-thumb.jpg?1582740711',
      category: 'Education',
      title: 'GitHub Copilot now available for teachers',
      content:
        'After a year in technical preview, GitHub Copilot, an AI pair programmer, is now free for all teachers verified on GitHub Global Campus.',
      username: 'Elise Hollowed & Andrew Rice',
      date: 'September 8, 2022',
    },
  ];
  const secondatyItems = [
    {
      image: 'https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg',
      category: 'Open Source',
      title: 'Research: open source software in India, Kenya, Egypt, and Mexico',
      content: 'Now your team can spend less time managing infrastructure and more time writing code.',
      username: 'Mala Kumar',
      date: 'September 7, 2022',
    },
    {
      image: 'https://wallpaper.dog/large/10795761.jpg',
      category: 'Engineering',
      title: 'GitHub Availability Report: August 2022',
      content:
        'In August, we experienced one incident resulting in significant impact to Codespaces. We’re still investigating that incident and will include it in next month’s report. This report also sheds light into an incident that impacted Codespaces in July.',
      username: 'Jakub Oleksy',
      date: 'September 8, 2022',
    },
  ];
  return (
    <section className={styles.HomePage__Container}>
      <section className={styles.HomePage__Content}>
        <section style={{ padding: '0 24px', width: '58%' }}>
          <CardMain item={item} />
        </section>
        <section style={{ padding: '0 24px', width: '41%' }}>
          {rightItems.map((item, i) => (
            <CardMini item={item} key={i} style={{ borderTop: `1px solid ${i > 0 ? '#0002' : '#0000'}` }} />
          ))}
        </section>
      </section>
      <section className={styles.HomePage__SecondaryPosts}>
        {secondatyItems.map((item, i) => <CardMedium item={item} key={i} />)}
      </section>
    </section>
  );
};

export default HomePageSection;
