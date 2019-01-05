import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from 'emotion';
import styled from '@emotion/styled';

import { PostFullHeader } from '../templates/post';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background #fff;
    padding-bottom: 4vw;
  }
`;

const Header = styled.h1`
  font-family: 'IBM Plex Mono ExtraLight';
  font-style: italic;
  font-size: 3.7em;
  font-weight: 200;
`;

const Section = css`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 70px 100px 0;
  min-height: 230px;
  font-family: Georgia, serif;
  font-size: 2.2rem;
  line-height: 1.6em;
  background: #fff;

  @media (max-width: 1170px) {
    padding: 5vw 7vw 0;
  }
  @media (max-width: 800px) {
    font-size: 1.9rem;
  }

  .post-content p:first-of-type {
    border-left: 4px solid #fae042;
    padding-left: 0.8em;
    text-align: justify;
  }
`;

const InfoBox = styled.p`
  background: rgba(255, 213, 70, 0.1);
  padding: 0.8em 1em;
  border-left: 4px solid rgba(236, 198, 48, 0.5);
  color: #84613d;
  line-height: 1.2;
  text-align: center;
  position: relative;
  clear: both;
`;

const Success = styled(InfoBox)`
  background: rgba(114, 186, 94, 0.15);
  border-left: 4px solid rgba(107, 183, 86, 0.75);
  color: rgba(107, 183, 86, 0.95);

  :before {
    content: '👍';
    background: rgba(107, 183, 86, 0.95);
    border-radius: 50%;
    align-items: center;
    top: -0.8rem;
  }

  :before {
    width: 35px;
    height: 35px;
    display: inline-flex;
    justify-content: center;
    position: absolute;
    left: -1.2rem;
  }
`;

const Article = styled.article`
  h2 {
    display: flex;
    color: #efbb35;
    font-size: 3rem;
    :after {
      content: ' ';
      background: linear-gradient(to right, rgba(239, 187, 53, 0.6), rgba(236, 198, 48, 0.1));
      height: 3px;
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: auto;
      margin: 0.75em 2px 0 3px;
      flex-grow: 1;
      border-radius: 2px;
    }
  }
`;

const StyleGuide: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>Style Guide</title>
    </Helmet>
    <Wrapper className={`${PageTemplate}`}>
      <header className={`${SiteHeader} ${outer}`}>
        <SiteNav />
      </header>
      <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
        <Article>
          <PostFullHeader>
            <Header>Fyndx.io Style Guide</Header>
          </PostFullHeader>
          <section className={`${Section}`}>
            <div className="post-content">
              <p>
                Here’s a style guide for posts on Alligator.io. The first paragraph of each post is
                a lead-in paragraph that’s styled automatically with the left yellow line. Posts are
                written in markdown.
              </p>
              <InfoBox>
                😎 You can get in touch with us here if you're interesting in collaborating content.
              </InfoBox>
              <Success>
                ✂️ Find editor snippets for Atom, VS Code or Sublime Text in this repo.
              </Success>
            </div>
            <p>
              The articles are short and sweet. Longer explanations are broken-down into easier to
              digest bullets points whenever possible.
            </p>
            <h2>Contents</h2>
            <p style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <a href={'#markdown-formatting'}>Markdown Formatting</a>
            </p>
            <h2 id="markdown-formatting">Markdown Formatting</h2>
            <p>
              Fyndx.io is a Gatsby-powered website, so every post starts with some Markdown. Here’s
              an example of the typical markdown for a post:
            </p>
            <pre className={'language-bash'}>
              <code className={'language-bash'}>
                {`
---
layout: page-fullwidth title: "Using JavaScript to Make Crispy Bacon"
categories: 
  - js 
tags: 
  - bacon 
header: no 
breadcrumb: true 
meta_description: "Using the latest JavaScript techniques to properly cook your bacon." 
author: john_doe 
---`}
              </code>
            </pre>
          </section>
        </Article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default StyleGuide;
