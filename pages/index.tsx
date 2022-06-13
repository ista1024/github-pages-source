import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ista1024 Next App</title>
        <meta name="description" content="Next app for ista1024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome</h1>

        <div className={styles.grid}>
          <a href="./blog" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>My simple tech blog! 🚀</p>
          </a>

          <a href="./" className={styles.card}>
            <h2>Web3 test module &rarr;</h2>
            <p>Simple web module to test web3 w block-chain 🧱⛓</p>
          </a>

          <a href="https://github.com/ista1024" className={styles.card}>
            <h2>About me &rarr;</h2>
            <p>A bit of myself 🧑🏻‍💻</p>
          </a>

          <a href="https://github.com/ista1024" className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Have a look my github 😊</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
