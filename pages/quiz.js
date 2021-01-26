import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';

import db from '../db.json';
import Card from '../src/components/Card/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media only screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

//each page should have a different one
const MetaTags = () => {
  return (
    <Head>
      <title>D&D Quiz</title>
      <meta property='og:title' content='D&D Quiz: começe agora!' key='title' />
      <meta property='og:image' content={db.bg} />
      <meta property='og:image:type' content='image/jpg' />
      <meta property='og:type' content='website' />
      <meta
        property='og:description'
        content='Comece agora e descubra se você está pronto para jogar sua primeira campanha'
      />
      <meta property='og:locale' content='pt_BR' />
    </Head>
  );
};

const Quiz = () => {
  return (
    <>
      <MetaTags />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Card>
            <Card.Header>
              <h1>Dungeons & Dragons</h1>
            </Card.Header>
            <Card.Content>
              <p>Esta é a página do quiz.</p>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <p>Orsik (Dwarf Cleric - lvl 2)</p>
              <p>Illidan (High Elf Mage - lvl 2)</p>
              <p>Bertha (Hobbit Rogue - lvl 2)</p>
              <p>Aragorn (Human Warrior - lvl 2)</p>
              <p>Amafrei (Human Warrior - lvl 2)</p>
              <p>Tarick bundao</p>
            </Card.Content>
            <Link href='/'>
              <a style={{ textDecoration: 0, color: 'red' }}>Voltar</a>
            </Link>
          </Card>
        </QuizContainer>
        <Footer />
        <GitHubCorner projectUrl='https://github.com/andrei-ce/' />
      </QuizBackground>
    </>
  );
};

export default Quiz;
