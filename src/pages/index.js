import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout:          false,
      articleTimeout:   false,
      article:          '',
      loading:          'is-loading'
    }
    this.handleOpenArticle  = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef      = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {
    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  render() {
    const { location }           = this.props;
    const { handleOpenArticle }  = this;
    const { isArticleVisible }   = this.state;
    const { timeout }            = this.state;
    const { article }            = this.state;
    const { articleTimeout }     = this.state;
    const { handleCloseArticle } = this;
    const { setWrapperRef }      = this;
    const { loading }            = this.state;

    return (
      <Layout {...{ location }}>
        <div className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header {...{
              onOpenArticle: handleOpenArticle,
              timeout
            }}/>
            <Main {...{
              isArticleVisible,
              timeout,
              articleTimeout,
              article,
              handleCloseArticle,
              setWrapperRef
            }}/>
            <Footer {...{ timeout }} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
