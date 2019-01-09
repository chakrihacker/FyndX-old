import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Facebook from './Facebook';
import Twitter from './Twitter';

export interface SEOProps {
  title: string;
  description: string;
  banner: string;
  pathname: string;
  article: boolean;
  image: string;
  url: string;
  author: string;
}

export default class SEO extends Component<SEOProps> {
  render() {
    const { title, description, article = false, image, url } = this.props;
    return (
      <>
        <Helmet title={title}>
          <html lang={'en'} />
          <meta name="description" content={description} />
          <meta name="image" content={image} />
          <meta name="apple-mobile-web-app-title" content={'FyndX'} />
          <meta name="application-name" content={'FyndX'} />
        </Helmet>
        <Facebook
          desc={description}
          image={image}
          title={title}
          type={article ? 'article' : null}
          url={url}
        />
        <Twitter title={title} image={image} desc={description} />
      </>
    );
  }
}
