import styled from 'styled-components';
import db from '../db.json';

import Card from '../src/components/Card/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';

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

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Card>
          <Card.Header>
            <h1>Dungeons & Dragons</h1>
          </Card.Header>
          <Card.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta,
              quasi, optio accusantium qui sit sunt et atque dolorem facere vitae!
            </p>
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
        </Card>
      </QuizContainer>
      <Footer />
      <GitHubCorner projectUrl='https://github.com/andrei-ce/' />
    </QuizBackground>
  );
}
