import React     from 'react'
import PropTypes from 'prop-types'


export default function Footer({ timeout }) {
  return (
    <footer id="footer" style={timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Tyler McSilva. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a> with help from <a href="https://html5up.net">HTML5 UP</a></p>
    </footer>
  );
}


Footer.propTypes = {
    timeout: PropTypes.bool
};
