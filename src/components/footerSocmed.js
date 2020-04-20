import React from "react"
import footerStyles from "./footer.module.css"

import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Arrays.
const socmed = [
  {
    id: 1,
    icon: faGithub,
    url: "https://www.github.com"
  },
  {
    id: 2,
    icon: faTwitter,
    url: "https://twitter.com"
  },
  {
    id: 3,
    icon: faEnvelope,
    url: "mailto:example@example.com"
  },
];

// Carrying in function - ICONS.
function SocmedFAIcons(props) {
  return (
    <li className={footerStyles.footerSocmedLi}>
      <a href={props.socmedURL} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={props.socmedIcon} size="2x" />
      </a>
    </li>
  );
};

// The actual footer + data mapping.
function FooterSocmed() {
  return (
    <div>
      <ul className={footerStyles.footerSocmedUl}>

        {socmed.map(socmedCat => (
          <SocmedFAIcons 
              key={socmedCat.id}
              socmedURL={socmedCat.url}
              socmedIcon={socmedCat.icon}
            />
        ))}

      </ul>
    </div>
  )
};

export default FooterSocmed;
