import Image from "next/image";
import styles from '../styles/Figure.module.css'
import { useState } from "react";

const Figure = ({ picture }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        if (liked) {
            setLiked(false);
        } else {
            setLiked(true);
        }
    }

    return (
        <figure className={styles.figure}>
            <Image src={picture.url} width={500} height={400} />
            <figcaption className={styles.figureCaption}>
                <h1>{picture.title}</h1>
                <p className={styles.date}>{picture.date}</p>
                <p className={styles.explanation}>{picture.explanation}</p>
            </figcaption>
            {!liked ?
                <button type="button" onClick={toggleLike}>Like</button>
                :
                <button type="button" onClick={toggleLike}>Unlike</button>
            }
        </figure>
    );
}

export default Figure;