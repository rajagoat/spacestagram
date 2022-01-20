import Image from "next/image";
import styles from '../styles/Figure.module.css'
import { useState } from "react";
import notLikedIcon from '../public/icons/heart-outlined.svg'
import likedIcon from '../public/icons/heart-filled.svg'

const Figure = ({ picture }) => {
    const truncate = (str, no_words) => {
        return str.split(" ").splice(0, no_words).join(" ") + "...";
    }

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
            <Image src={picture.url} width={500} height={400} alt="" priority/>
            <figcaption className={styles.figureCaption}>
                <h1>{picture.title}</h1>
                <p className={styles.date}>{picture.date}</p>
                <p className={styles.explanation}>{truncate(picture.explanation, 30)}</p>
            </figcaption>
            {!liked ?
                <button type="button" onClick={toggleLike}>
                    <Image src={notLikedIcon} width={50} height={50} alt="like button"/>
                </button>
                :
                <button type="button" onClick={toggleLike}>
                    <Image src={likedIcon} width={50} height={50} alt="unlike button"/>
                </button>
            }
        </figure>
    );
}

export default Figure;