import React     from 'react';
import PropTypes from 'prop-types';
import Article   from './article';


export default class Main extends React.Component {
  render() {
    const { article }            = this.props;
    const { articleTimeout }     = this.props;
    const { handleCloseArticle } = this.props;
    const { setWrapperRef }      = this.props;
    const { timeout }            = this.props;

    const style = {
      display: timeout ? 'flex' : 'none'
    } 

    return (
      <div ref={setWrapperRef} id="main" style={style}>

        <Article id="work" title="Work" active={article === 'work'} onCloseArticle={handleCloseArticle} articleTimeout={articleTimeout}>
          {/* Github chart provided by: https://ghchart.rshah.org */}
          <span className="image main"><img src="http://ghchart.rshah.org/9C27B0/tylerbmcsilva" alt="tylerbmcsilva's Github contribution chart" />
</span>
          <p>Currently working at <a href="https://broadly.com" target="_blank" rel="noopener noreferrer">Broadly</a> as a software engineer. Started there in the customer success team, and after receiving my B.S. in Computer Science from Oregon State University, switched onto the Product team.</p>
          <p>Currently I'm working with:
          <ul>
            <li>Node.js/Express Backend</li>
            <li>React/Redux Frontend</li>
            <li>Mocha/Puppeteer/Enzyme for Tests</li>
            <li>MongoDB</li>
          </ul>
          </p>
          <p>
            But I also have some experience with:
            <ul>
              <li>C/C++</li>
              <li>SQL</li>
              <li>Python</li>
            </ul>
          </p>
          <p>My interests also include:
            <ul>
              <li>2D/3D Animation</li>
              <li>Politics & Technology</li>
            </ul>
          </p>
        </Article>

        <Article id="life" title="Life" active={article === 'life'} onCloseArticle={handleCloseArticle} articleTimeout={articleTimeout}>
          <p>Grew up in the midwest, but have since ventured out to California, and now Maryland. Currently living in Baltimore with the best husband I could ask for and my two beautiful dogs.</p>
          <p>My hobbies include...</p>
        </Article>

        <Article id="contact" title="Contact" active={article === 'contact'} onCloseArticle={handleCloseArticle} articleTimeout={articleTimeout}>
          <p>Contact form coming soon. For now, you can reach me at:</p>
          <p>tylerbmcsilva AT gmail DOT com</p>
          <p>or at any of these social media sites:</p> 
          <ul className="icons">
            <li><a href="https://github.com/tylerbmcsilva" className="icon fa-github" target="_blank" rel="noopener noreferrer"><span className="label">GitHub</span></a></li>
            <li><a href="https://linkedin.com/in/tylerbmcsilva" className="icon fa-linkedin" target="_blank" rel="noopener noreferrer"><span className="label">LinkedId</span></a></li>
            <li><a href="https://twitter.com/tymcsilva" className="icon fa-twitter" target="_blank" rel="noopener noreferrer"><span className="label">Twitter</span></a></li>
            <li><a href="https://instagram.com/tymcsilva" className="icon fa-instagram" target="_blank" rel="noopener noreferrer"><span className="label">Instagram</span></a></li>
          </ul>
        </Article>
      </div>
    );
  }
}


Main.propTypes = {
  route:          PropTypes.object,
  article:        PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout:        PropTypes.bool,
  setWrapperRef:  PropTypes.func.isRequired
};
