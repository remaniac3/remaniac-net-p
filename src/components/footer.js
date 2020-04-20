// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import footerStyles from "./footer.module.css"

import FooterSocmed from "./footerSocmed"

const Footer = ({ siteTitle }) => (
    <footer
        style={{
            background: 'tomato',
        }}
    >
        <div className={footerStyles.footer}>
            <div className={footerStyles.footerAuthor}>
                {siteTitle} © 2010 - {new Date().getFullYear()}
            </div>

            <div className={footerStyles.footerLinks}>
                <FooterSocmed />
            </div>
        </div>
    </footer>
  )

  Footer.propTypes = {
      siteTitle: PropTypes.string,
  }

  Footer.defaultProps = {
      siteTitle: ``,
  }

export default Footer