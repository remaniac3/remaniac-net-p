import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `teal`,
    }}
  >

    <div className={headerStyles.header}>

      <div className={headerStyles.siteName}>
        <h3>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        </h3>
      </div>

      <div className={headerStyles.navLinks}>
        
        <input className={headerStyles.menuBtn} type="checkbox" id={headerStyles.menuBtn} />
        <label className={headerStyles.menuIcon} htmlFor={headerStyles.menuBtn}><span className={headerStyles.navicon}></span></label>

          <ul className={headerStyles.menu}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                className={headerStyles.liStyle}
              >
                <Link style={{ color: `white` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
      </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
