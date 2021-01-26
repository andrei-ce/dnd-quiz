import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Head from 'next/head';
import db from '../db.json';

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
    display: flex;
    flex-direction: column;
    color: ${() => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
    font-family: 'Roboto', sans-serif;
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
    <title>D&D Quiz</title>
    <meta property='og:title' content={db.title} key='title' />
    <meta property='og:image' content={db.bg} />
    <meta property='og:image:type' content='image/jpg' />
    <meta property='og:type' content='website' />
    <meta property='og:description' content={db.description} />
    <meta property='og:locale' content='pt_BR' />
    <link rel='preconnect' href='https://fonts.gstatic.com' />
    <link
      href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap'
      rel='stylesheet'
    />
  </Head>
);

const App = ({ Component, pageProps }) => (
  <>
    <MetaTags />
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
