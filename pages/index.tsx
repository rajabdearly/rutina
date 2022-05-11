import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Рутина</title>
        <meta
          name="description"
          content="Рутина, блог и прочее о программировании."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <Image
                src="/home-icon.svg"
                width="30px"
                height="30px"
                alt="home icon"
              />
            </div>
            <div>Rutina.dev</div>
          </div>
        </Link>
        <div className={styles.nav}>
          <a
            className={styles.source}
            href="https://github.com/rajabdearly/rutina"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
          <a
            className={styles.subscribe}
            href="https://youtube.com/channel/UCXH__zFndtjifhUnlxuSF5A"
            target="_blank"
            rel="noreferrer"
          >
            Подпишись!
          </a>
        </div>
      </header>
    </div>
  );
};

export default Home;
