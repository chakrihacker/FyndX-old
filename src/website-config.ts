export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook?: string;
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * shortname for manifest. MUST be shorter than 12 characters
   */
  shortName: string;
}

const config: WebsiteConfig = {
  title: 'Fyndx',
  description: 'Fynd best articles for development',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/fyndx-logo.png',
  lang: 'en',
  shortName: 'FyndX',
  siteUrl: 'https://fyndx.io',
  facebook: 'https://www.facebook.com/chakrihacker',
  twitter: 'https://twitter.com/chakrihacker',
  showSubscribe: true,
  mailchimpAction:
    'https://fyndx.us20.list-manage.com/subscribe/post?u=b37c6197dc44c17aadd03cc2f&amp;id=3611a1392a',
  mailchimpName: 'b_b37c6197dc44c17aadd03cc2f_3611a1392a',
};

export default config;
