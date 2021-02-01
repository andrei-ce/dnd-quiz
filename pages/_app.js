import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Head from 'next/head';
import db from '../db.json';
// import { DefaultSeo } from 'next-seo'

// import foundations-theme
const { theme } = db;

// create global-app-theme
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* background-repeat: no-repeat;
    background-attachment: fixed; */
    display: flex;
    flex-direction: column;
    color: ${() => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
    font-family: 'Roboto Slab', sans-serif;
    font-weight: 300;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// each page should have a different one
const MetaTags = () => (
  <Head>
    <title>D&D | Quiz</title>
    <meta property='og:title' content={db.title} key='title' />
    <meta property='og:image' content={db.bg} />
    <meta property='og:description' content={db.description} />
    <meta property='og:type' content='website' />
    <meta property='og:locale' content='pt_BR' />
    <meta property='og:image:type' content='image/jpg' />
    <link rel='shortcut icon' href={db.favicon} />
    <link rel='preconnect' href='https://fonts.gstatic.com' />
    <link
      href='https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;300&family=Trade+Winds&display=swap'
      rel='stylesheet'
    />
    <link
      rel='stylesheet'
      href='https://use.fontawesome.com/releases/v5.7.1/css/all.css'
    />
  </Head>
);

const App = ({ Component, pageProps }) => (
  <>
    <MetaTags />
    {/* <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt_BR',
          site_name: db.title,
          images: [
            {
              url: db.bg,
              width: 800,
              heigth: 600,
              alt: db.title
            }
          ],
          description: db.description
        }}
      /> */}
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default App;
