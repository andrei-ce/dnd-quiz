import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import CustomBtn from '../src/components/CustomBtn';
import Input from '../src/components/Input';

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

// main component:
const Home = () => {
  const router = useRouter();
  const [player, setPlayer] = useState('');

  const onChange = (e) => {
    setPlayer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${player}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Card>
          <Card.Header>
            <h1>Dungeons & Dragons</h1>
          </Card.Header>
          <Card.Content>
            <form action='' autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
              <Input
                name='player'
                value={player}
                placeholder='Apresente-se, jovem'
                onChange={(e) => onChange(e)}
              />
              <div style={{ display: 'flex' }}>
                <CustomBtn type='submit' color='normal' disabled={!player}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <i
                      class='fa fa-rocket'
                      aria-hidden='true'
                      style={{ fontSize: 20, paddingRight: 10 }}
                    />
                    <span>Jogar!</span>
                  </div>
                </CustomBtn>
              </div>
            </form>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <h3>Quizzes da galera</h3>
            <p>Orsik (Dwarf Cleric - lvl 2)</p>
            <p>Illidan (High Elf Mage - lvl 2)</p>
            <p>Bertha (Hobbit Rogue - lvl 2)</p>
            <p>Aragorn (Human Warrior - lvl 2)</p>
            <p>Amafrei (Human Warrior - lvl 2)</p>
          </Card.Content>
        </Card>
      </QuizContainer>
      <Footer />
      <GitHubCorner projectUrl='https://github.com/andrei-ce/' />
    </QuizBackground>
  );
};

export default Home;
