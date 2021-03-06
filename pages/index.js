import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const API = 'PyzP77Efyzi699c1qrWqxJ4adGByZLYpTNyCmbOs';
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}&start_date=2021-12-14&end_date=2021-12-21`)
  const data = await res.json();
  const images = data.map(figure => {
    return figure.url;
  }).slice(0, 6);

  return {
    props: { images }
  }
}

export default function Home({ images }) {
  return (
    <div className={styles.landing}>
      <Navbar loginStatus={false} />
      <Head>
        <title>Spacestagram</title>
        <meta name="description" content="Spacetagram is an image sharing platform for all things space-related." />
        <link rel="icon" href="/icons/logo.svg" />
      </Head>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>SPACESTAGRAM</h1>
        <div className={styles.showHorizon}>
          <div className={styles.horizon}>
            <svg viewBox="0 0 1512 652" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <mask id="mask0_2_16" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="1512" height="652">
                <rect width="1512" height="652" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0_2_16)">
                <path d="M-3.05176e-05 636C607 515 931 526 1512 636C2093 746 1512 253 1512 253C913.946 -1.17218 583.017 3.0647 -3.05176e-05 253C-3.05176e-05 253 -607 757 -3.05176e-05 636Z" fill="url(#paint0_radial_2_16)" />
              </g>
              <defs>
                <radialGradient id="paint0_radial_2_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(756 756.473) rotate(-90) scale(441.473 1742.84)">
                  <stop stopColor="#2b50c2" />
                  <stop offset="1" stopColor="#1C1F74" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <blockquote className={styles.quote} cite='https://er.jsc.nasa.gov/SEH/quotes.html'>
        ???For I dipped into the Future, far as human eye could see; saw the vision of the world, and all the wonder that would be.???
      </blockquote>
      <p className={styles.quoteAuthor}>??? Alfred, Lord Tennyson, 1842</p>
      <div className={styles.imagePromotion}>
        <h1>Image Sharing from the Final Frontier</h1>
        <div className={styles.sampleImages}>
          {images && images.map(image =>
            <Image key={image} src={image} alt='' width={600} height={500} />
          )}
        </div>
      </div>
      <div className={styles.promo}>
        <button type='button'>
          <Link href={'/feed'}>
            <a className='see-more'>See More</a>
          </Link>
        </button>
      </div>
      <div className={styles.missionStatement}>
        <h1>Our Mission</h1>
        <h3>Make Commerce Better for Everyone,<br /> Including the Whole Entire Universe</h3>
      </div>
      
    </div>
  )
}
