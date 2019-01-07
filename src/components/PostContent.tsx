import { lighten, setLightness, darken, setSaturation } from 'polished';
import * as React from 'react';
import styled from '@emotion/styled';
import rehypeReact from 'rehype-react';

import { colors } from '../styles/colors';

export const PostFullContent = styled.section`
  position: relative;
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

  h1,
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
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  dl,
  pre,
  blockquote,
  .post-full-comments,
  .footnotes {
    min-width: 100%;
  }

  ul {
    margin-left: 20px;
    padding: 0;
    list-style-type: none;
  }

  li {
    word-break: break-word;
    border-bottom: 4px solid rgba(236, 198, 48, .1);
    margin-bottom: .8em;
    padding-bottom: .7em;
  }

  li p {
    margin: 0;
  }

  a {
    color: #000;
    word-break: break-word;
    box-shadow: ${colors.blue} 0 -1px 0 inset;
  }

  a:hover {
    color: ${colors.blue};
    text-decoration: none;
  }

  strong,
  em {
    /* color: color(var(--darkgrey) l(-5%)); */
    color: ${darken('0.05', colors.darkgrey)};
  }

  em {
    background-color: rgba(236, 198, 48, .1);
    line-height: inherit;
    padding: 5px 7px 0;
    white-space: pre-wrap;
    border-bottom: 2px solid rgba(236, 198, 48, .3);
    font-style: normal;
    border-radius: 4px;
  }

  small {
    display: inline-block;
    line-height: 1.6em;
  }

  li:first-child {
    margin-top: 0;
  }

  img,
  video {
    display: block;
    margin: 1.5em auto;
    max-width: 1040px;
    height: auto;
  }
  @media (max-width: 1040px) {
    img,
    video {
      width: 100%;
    }
  }

  img[src$='#full'] {
    max-width: none;
    width: 100vw;
  }

  img + br + small {
    display: block;
    margin-top: -3em;
    margin-bottom: 1.5em;
    text-align: center;
  }

  /* Override third party iframe styles */
  iframe {
    margin: 0 auto !important;
  }

  blockquote {
    margin: 0 0 1.5em;
    padding: 0 1.5em;
    border-left: #3eb0ef 3px solid;
  }

  blockquote p {
    margin: 0 0 1em 0;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-style: italic;
  }

  blockquote p:last-child {
    margin-bottom: 0;
  }

  code {
    padding: 0 5px 2px;
    font-size: 0.8em;
    line-height: 1em;
    font-weight: 400 !important;
    background: ${colors.whitegrey};
    border-radius: 3px;
  }

  p code {
    word-break: break-all;
  }

  pre {
    overflow-x: auto;
    margin: 1.5em 0 3em;
    padding: 5px 20px;
    max-width: 100%;
    /* border: color(var(--darkgrey) l(-10%)) 1px solid; */
    border: ${darken('0.01', colors.darkgrey)} 1px solid;
    color: ${colors.whitegrey};
    font-size: 1.4rem;
    line-height: 1.5em;
    /* background: color(var(--darkgrey) l(-3%)); */
    background: ${darken('0.03', colors.darkgrey)};
    border-radius: 5px;
  }

  pre code {
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    background: transparent;
  }

  pre code :not(span) {
    color: inherit;
  }

  /* .fluid-width-video-wrapper { */
  .gatsby-resp-iframe-wrapper {
    margin: 1.5em 0 3em;
  }

  hr {
    margin: 4vw 0;
  }

  // hr:after {
  //   content: '';
  //   position: absolute;
  //   top: -15px;
  //   left: 50%;
  //   display: block;
  //   margin-left: -10px;
  //   width: 1px;
  //   height: 30px;
  //   /* background: color(var(--lightgrey) l(+10%)); */
  //   background: ${lighten('0.1', colors.lightgrey)};
  //   box-shadow: #fff 0 0 0 5px;
  //   transform: rotate(45deg);
  // }

  hr {
    width: 15%;
    border: 0;
    border-top: 4px solid #FAE042;
    margin: 2.5em auto 2.3em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    // color: ${setLightness('0.05', colors.darkgrey)};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1 {
    margin: 0.5em 0 0.2em 0;
    font-size: 4.6rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2.8rem;
    }
  }

  h2 {
    margin: 0.5em 0 0.2em 0;
    font-size: 3.6rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 2.6rem;
    }
  }

  h3 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.8rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    h3 {
      font-size: 2.2rem;
    }
  }

  h4 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.8rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    h4 {
      font-size: 2.2rem;
    }
  }

  h5 {
    display: block;
    margin: 0.5em 0;
    padding: 1em 0 1.5em;
    border: 0;
    color: ${colors.blue};
    font-family: Georgia, serif;
    font-size: 3.2rem;
    line-height: 1.35em;
    text-align: center;
  }
  @media (min-width: 1180px) {
    h5 {
      max-width: 1060px;
    }
  }
  @media (max-width: 500px) {
    h5 {
      padding: 0 0 0.5em;
      font-size: 2.2rem;
    }
  }

  h6 {
    margin: 0.5em 0 0.2em 0;
    font-size: 2.3rem;
    font-weight: 700;
  }
  @media (max-width: 500px) {
    h6 {
      font-size: 2rem;
    }
  }

  /* Tables */
  table {
    display: inline-block;
    overflow-x: auto;
    margin: 0.5em 0 2.5em;
    max-width: 100%;
    width: auto;
    border-spacing: 0;
    border-collapse: collapse;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem;
    white-space: nowrap;
    vertical-align: top;
  }

  table {
    -webkit-overflow-scrolling: touch;
    background: radial-gradient(ellipse at left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 0
        center,
      radial-gradient(ellipse at right, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 75%) 100% center;
    background-attachment: scroll, scroll;
    background-size: 10px 100%, 10px 100%;
    background-repeat: no-repeat;
  }

  table td:first-child {
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 20px 100%;
    background-repeat: no-repeat;
  }

  table td:last-child {
    background-image: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-position: 100% 0;
    background-size: 20px 100%;
    background-repeat: no-repeat;
  }

  table th {
    color: ${colors.darkgrey};
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.2px;
    text-align: left;
    text-transform: uppercase;
    /* background-color: color(var(--whitegrey) l(+4%)); */
    background-color: ${lighten('0.04', colors.whitegrey)};
  }

  table th,
  table td {
    padding: 6px 12px;
    /* border: color(var(--whitegrey) l(-1%) s(-5%)) 1px solid; */
    border: ${setSaturation('0.05', darken('0.01', colors.whitegrey))} 1px solid;
  }

  @media (max-width: 500px) {
    padding: 0;
    :before {
      display: none;
    }
    :after {
      display: none;
    }
  }

  /* OverRides */
  p:first-of-type {
    border-left: 4px solid #fae042;
    padding-left: 0.8em;
    text-align: justify;
  }

  .info-box {
    background: rgba(255, 213, 70, 0.1);
    padding: 0.8em 1em;
    border-left: 4px solid rgba(236, 198, 48, 0.5);
    color: #84613d;
    line-height: 1.2;
    text-align: center;
    position: relative;
    clear: both;
  }

  .warning {
    background: rgba(247,168,139,.15);
    border-left: 4px solid rgba(247,168,139, 0.45);

    :before {
      content: '!';
      color: #fff;
      background: #dc3958;
      align-items: flex-end;
      top: -1rem;
      font-weight: 700;
      // font-size: 1.4rem;
      -webkit-clip-path: polygon(50% 0,0 100%,100% 100%);
      clip-path: polygon(50% 0,0 100%,100% 100%);
      left: -1.8rem !important; 
    }
  }

  .success {
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
  }

  .info-box.success, .info-box.warning {
    :before {
      width: 35px;
      height: 35px;
      display: inline-flex;
      justify-content: center;
      position: absolute;
      left: -1.2rem;
    }
  }

  li {
    :before {
      content: "";
      left: 12px;
      margin-top: 11px;
      position: absolute;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid #efbb35;
    }
  }

  .file-desc {
    color: #999;
    text-align: right;
    margin-bottom: .5em;
    font-size: 1.1em;

    :before {
      content: "\u2193 \u00a0";
      color: rgba(239,187,53,.6);
    }
  }

  .file-desc span {
    border-bottom: 2px solid #eee;
  }
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  // components: { 'interactive-counter': Counter },
  components: {},
}).Compiler;

const Ast = ({ ast, ...props }: any) => {
  ast.properties = props;
  return renderAst(ast);
};

export interface PostContentProps {
  htmlAst: any;
}

const PostContent: React.FunctionComponent<PostContentProps> = ({ htmlAst }) => {
  return (
    <PostFullContent className="post-full-content">
      {/* TODO: this will apply the class when rehype-react is published https://github.com/rhysd/rehype-react/pull/11 */}
      <Ast className="post-content" ast={htmlAst} />
    </PostFullContent>
  );
};

export default PostContent;
