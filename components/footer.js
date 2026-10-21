import {
  FaGithub,
  FaProductHunt,
  FaTwitter,
  FaLinkedin,
  FaMastodon,
} from 'react-icons/fa';

import styles from 'components/footer.module.css';
import { A } from 'components/link';
import config from 'data/config';

const ICON_MAP = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  producthunt: <FaProductHunt />,
  twitter: <FaTwitter />,
  mastodon: <FaMastodon />,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {config.social.map((link, index) => (
          <div key={link.url} className={styles.item}>
            <A href={link.url} target="_blank" rel="noopener noreferrer me">
              <span className={styles.icon}>{ICON_MAP[link.icon]}</span>
              {link.name}
            </A>
            {index < config.social.length - 1 && <>&nbsp;// </>}
          </div>
        ))}
      </ul>
    </footer>
  );
}
