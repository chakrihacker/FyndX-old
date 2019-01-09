import React from 'react';
import Helmet from 'react-helmet';

export interface FacebookProps {
  url: string;
  type: string | null;
  title: string;
  desc: string;
  image: string;
}

const Facebook: React.FunctionComponent<FacebookProps> = ({ url, type, title, desc, image }) => (
  <Helmet>
    {url && <meta property="og:url" content={url} />}
    {type && <meta property="og:type" content={type} />}
    {title && <meta property="og:title" content={title} />}
    {desc && <meta property="og:description" content={desc} />}
    {image && <meta property="og:image" content={image} />}
  </Helmet>
);

export default Facebook;
