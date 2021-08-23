import Head from "next/head";
import Image from "next/image";
import UGAHacksBanner from "../public/UGAHacksLogo.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UGAHacks</title>
        <meta
          name="description"
          content="UGAHacks is a 501 (c)(3) organization that hosts an annual 48-hour programming 
          hackathon that takes place in Athens, Georgia at the University of Georgia."
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src={UGAHacksBanner}
          alt="UGAHacks logo"
          layout="intrinsic"
          objectFit="cover"
          className={styles.logo}
        />
        <h1 className={styles.subheading}>
          Revamped Site Under Construction - Stay tuned for updates!
        </h1>
      </main>
    </div>
  );
}
