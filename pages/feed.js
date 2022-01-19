import Figure from '../components/Figure';
import styles from '../styles/Feed.module.css'

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
            <h1>Brought to you using NASA's Astronomy Photo of the Day API</h1>
            <main className={styles.main}>
                {apod && apod.map(picture =>
                    <div key={picture.date}>
                        <Figure picture={picture}/>
                    </div>
                )}
            </main>
        </>
    );
}

export default Feed;