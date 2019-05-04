import React from 'react'
import PropTypes from 'prop-types'


export default function Header ({ onOpenArticle, timeout }) {
  return (
    <header id="header" style={timeout ? {display: 'none'} : {}}>
      <div className="logo">
          <span className="icon fa-coffee"></span>
      </div>
      <div className="content">
          <div className="inner">
              <h1>Tyler McSilva</h1>
              <p>Software Engineer, Gamer, Early-2000's Viral Video Enthusiast</p>
          </div>
      </div>
      <nav>
          <ul>
              <li><a href="#work" onClick={() => {onOpenArticle('work')}}>Work</a></li>
              <li><a href="#life" onClick={() => {onOpenArticle('life')}}>Life</a></li>
              <li><a href="https://github.com/tylerbmcsilva" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#contact" onClick={() => {onOpenArticle('contact')}}>Contact</a></li>
          </ul>
      </nav>
    </header>
  );
}


Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

