import React from 'react';
import Helmet from 'react-helmet';

export interface TwitterProps {
  type?: string;
  title: string;
  desc: string;
  image: string;
}

const Twitter: React.FunctionComponent<TwitterProps> = ({ type, title, desc, image }) => (
  <Helmet>
    <meta name="twitter:card" content={type} />
    <meta name="twitter:site" content={'@fyndxio'} />
    {title && <meta name="twitter:title" content={title} />}
    {desc && <meta name="twitter:description" content={desc} />}
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
);

export default Twitter;

Twitter.defaultProps = {
  type: 'summary_large_image',
};
