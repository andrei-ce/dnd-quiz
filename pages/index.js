import styled from 'styled-components';
import db from '../db.json';

import Card from '../src/components/Card/index';
import Footer from '../src/components/Footer/index';
import GitHubCorner from '../src/components/GitHubCorner/index';
import QuizBackground from '../src/components/QuizBackground/index';

// import Widget from '../src/components/Widget';
// import Widget from '../src/components/Widget';
// import Widget from '../src/components/Widget';

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
            <h1>Quizes da Galera</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta,
              et atque dolorem facere vitae!
            </p>
          </Card.Content>
        </Card>
      </QuizContainer>
      <Footer />
      <GitHubCorner projectUrl='https://github.com/andrei-ce/' />
    </QuizBackground>
  );
}
