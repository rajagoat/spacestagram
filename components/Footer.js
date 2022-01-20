import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import githubIcon from '../public/icons/github.svg'
import linkedinIcon from '../public/icons/linkedin.svg'

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.siteInfo}>
                <a
                    href="https://api.nasa.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h4>Image and caption data courtesy to NASA Astronomy Photo of the Day (APOD) API</h4>
                </a>

                <div className={styles.credits}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Powered by{' '}</span>
                        <span className={styles.logo}>
                            <Image className={styles.filterWhite} src="/icons/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>
                    </a>
                    <p>Copyright &copy; {date}</p>
                    <div className={styles.socialMedia}>
                        <a
                            href="https://github.com/rajagoat"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image className={styles.filterWhite} src={githubIcon} alt='Github Logo' width={25} height={25} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rajagoat/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image className={styles.filterWhite} src={linkedinIcon} alt='Github Logo' width={25} height={25} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;