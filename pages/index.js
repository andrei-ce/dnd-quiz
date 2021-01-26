import React from 'react';
import styled from 'styled-components';

import db from '../db.json';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import CustomLink from '../src/components/CustomLink';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 8%;
  @media only screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Apertou submit');
};

const Home = () => (
  <QuizBackground backgroundImage={db.bg}>
    <QuizContainer>
      <QuizLogo />
      <Card>
        <Card.Header>
          <h1>Dungeons & Dragons</h1>
        </Card.Header>
        <Card.Content>
          <form action='' onSubmit={handleSubmit}>
            <input placeholder='Apresente-se, jovem' />
            <button type='submit'>Jogar [seuNome]</button>
          </form>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <h1>Lost Mine of Phandelver:</h1>
          <p>Orsik (Dwarf Cleric - lvl 2)</p>
          <p>Illidan (High Elf Mage - lvl 2)</p>
          <p>Bertha (Hobbit Rogue - lvl 2)</p>
          <p>Aragorn (Human Warrior - lvl 2)</p>
          <p>Amafrei (Human Warrior - lvl 2)</p>
        </Card.Content>
        <CustomLink href='/quiz' type='normal' text='Começe agora!' />
      </Card>
    </QuizContainer>
    <Footer />
    <GitHubCorner projectUrl='https://github.com/andrei-ce/' />
  </QuizBackground>
);

export default Home;
