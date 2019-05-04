import React from 'react';


export default function Article({ active, articleTimeout, children, onCloseArticle, id, title }) {
  const className = `${active ? 'active' : ''} ${articleTimeout ? 'timeout' : ''}`;
  
  return (
    <article id={id} className={className} style={{display:'none'}}>
      <h2 className="major">{title}</h2>
      {children}
      <Article.Close onCloseArticle={onCloseArticle}/>
    </article>
  );
}


Article.Close = function({ onCloseArticle }) {
  return (
    <React.Fragment>
      <div className="close" onClick={onCloseArticle}></div>
    </React.Fragment>
  )
}