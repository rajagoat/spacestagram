import Figure from '../components/Figure';
import Navbar from '../components/Navbar';
import styles from '../styles/Feed.module.css'
import Head from 'next/head'

export const getStaticProps = async () => {
    const API = 'PyzP77Efyzi699c1qrWqxJ4adGByZLYpTNyCmbOs';
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}&start_date=2022-01-11`)
    const data = await res.json();

    // format dates to be more readable and add a liked variable to data
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    data.map(picture => {
        let newDate = new Date(picture.date);
        let newDateFormatted = `${months[newDate.getMonth()]} ${newDate.getDate() + 1} ${newDate.getFullYear()}`;
        picture.date = newDateFormatted;
        picture.liked = false;
    })

    return {
        props: { apod: data }
    }
}

const Feed = ({ apod }) => {
    return (
        <>
            <Head>
                <title>Spacestagram | Feed</title>
                <meta name="description" content="Feed which displays all the most exciting space-related sights and more!" />
                <link rel="icon" href="/icons/logo.svg" />
            </Head>
            <Navbar loginStatus={true} />
            <h1 className={styles.title}>Your Feed</h1>
            <main className={styles.main}>
                {apod && apod.map(picture =>
                    <div key={picture.date}>
                        <Figure picture={picture} />
                    </div>
                )}
            </main>
        </>
    );
}

export default Feed;