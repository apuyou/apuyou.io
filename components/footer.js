/** @jsxImportSource theme-ui */

import {
  FaGithub,
  FaProductHunt,
  FaTwitter,
  FaLinkedin,
  FaMastodon,
} from 'react-icons/fa';

import config from 'data/config';
import { A } from 'components/link';

const ICON_MAP = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  producthunt: <FaProductHunt />,
  twitter: <FaTwitter />,
  mastodon: <FaMastodon />,
};

export default function Footer() {
  return (
    <footer
      sx={{
        borderTopStyle: 'solid',
        borderTopWidth: 2,
        borderTopColor: 'text',
        marginTop: 4,
        marginX: -2,
        paddingX: 2,
      }}
    >
      <ul
        sx={{
          listStyleType: 'none',
          marginX: 0,
          marginTop: 2,
          marginBottom: 4,
          padding: 0,
        }}
      >
        {config.social.map((link, index) => (
          <div
            key={link.url}
            sx={{
              display: 'inline-block',
              marginRight: 1,
            }}
          >
            <A href={link.url} target="_blank" rel="noopener noreferrer me">
              <span
                sx={{
                  marginRight: 1,
                  verticalAlign: 'middle',
                }}
              >
                {ICON_MAP[link.icon]}
              </span>
              {link.name}
            </A>
            {index < config.social.length - 1 && <>&nbsp;// </>}
          </div>
        ))}
      </ul>
    </footer>
  );
}
