import Image from "next/image";
import styles from '../styles/Figure.module.css'
import { useState } from "react";
import notLikedIcon from '../public/icons/heart-outlined.svg'
import likedIcon from '../public/icons/heart-filled.svg'

const Figure = ({ picture }) => {
    const [liked, setLiked] = useState(false);
    const [truncated, setTruncated] = useState(true);

    const truncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ") + "...";
    }

    const toggleLike = () => {
        if (liked) {
            setLiked(false);
        } else {
            setLiked(true);
        }
    }

    const toggleTruncate = () => {
        if (truncated) {
            setTruncated(false);
        } else {
            setTruncated(true);
        }
    }

    return (
        <figure className={styles.figure}>
            <Image src={picture.url} width={500} height={400} alt="" priority />
            <figcaption className={styles.figureCaption}>
                <h1>{picture.title}</h1>
                <p className={styles.date}>{picture.date}</p>
                {truncated ?
                    <>
                        <p className={styles.explanation}>{truncate(picture.explanation, 30)}</p>
                        <button className={styles.truncateButton} type="button" onClick={toggleTruncate}>Show More</button>
                    </>
                    :
                    <>
                        <p className={styles.explanation}>{picture.explanation}</p>
                        <button className={styles.truncateButton} type="button" onClick={toggleTruncate}>Show Less</button>
                    </>
                }

            </figcaption>
            {!liked ?
                <button type="button" onClick={toggleLike}>
                    <Image src={notLikedIcon} width={50} height={50} alt="like button" />
                </button>
                :
                <button type="button" onClick={toggleLike}>
                    <Image src={likedIcon} width={50} height={50} alt="unlike button" />
                </button>
            }
        </figure>
    );
}

export default Figure;