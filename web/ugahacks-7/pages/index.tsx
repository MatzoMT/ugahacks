import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="UGAHacks 7 Event Site [[ event info here ]]" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Welcome to 7.ugahacks.com!
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>This page is under construction!</code>
        </p>

        <div className={styles.grid}>
          <a href="https://ugahacks.com" className={styles.card}>
            <h2>UGAHacks.com &rarr;</h2>
            <p>UGAHacks&apos; organization site</p>
          </a>

          <a href="https://6.ugahacks.com" className={styles.card}>
            <h2>6.ugahacks.com &rarr;</h2>
            <p>Check out our last event&apos;s site!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
