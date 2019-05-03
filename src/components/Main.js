import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          {/* Github chart provided by: https://ghchart.rshah.org */}
          <span className="image main"><img src="http://ghchart.rshah.org/9C27B0/tylerbmcsilva" alt="tylerbmcsilva's Github contribution chart" />
</span>
          <p>Currently working at <a href="https://broadly.com" target="_blank">Broadly</a> as a software engineer. Started there in the customer success team, and after receiving my B.S. in Computer Science from Oregon State University, switched onto the Product team.</p>
          <p>I have a wide varity of skills, but currently I'm working with:
          <ul>
            <li>Node.js Backend</li>
            <li>React/Redux Frontend</li>
            <li>Mocha/Puppeteer/Enzyme Test Suitesx</li>
            <li>MongoDB</li>
          </ul>
          </p>
          {close}
        </article>

        <article id="life" className={`${this.props.article === 'life' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Life</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Grew up in the midwest, but have since ventured out to California, and now Maryland. Currently living in Baltimore with the best husband I could ask for and my two beautiful dogs.</p>
          <p>My hobbies include...</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://github.com/tylerbmcsilva" className="icon fa-github" target="_blank"><span className="label">GitHub</span></a></li>
            <li><a href="https://linkedin.com/in/tylerbmcsilva" className="icon fa-linkedin" target="_blank"><span className="label">LinkedId</span></a></li>
            <li><a href="https://twitter.com/tymcsilva" className="icon fa-twitter" target="_blank"><span className="label">Twitter</span></a></li>
            <li><a href="https://instagram.com/tymcsilva" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main