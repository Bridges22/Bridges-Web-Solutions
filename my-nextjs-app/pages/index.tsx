import Head from 'next/head';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Showcasing my projects and skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Portfolio />
      </main>
    </div>
  );
}