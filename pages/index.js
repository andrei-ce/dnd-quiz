import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Card from '../src/components/Card';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import CustomBtn from '../src/components/CustomBtn';
import Input from '../src/components/Input';

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
            <p>Você está pronto para jogar sua primeira campanha?</p>
            <form autoComplete='off' onSubmit={(e) => handleSubmit(e)}>
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
                      className='fa fa-rocket'
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
            <p>🚧 Em construção 🚧</p>
          </Card.Content>
        </Card>
      </QuizContainer>
      <Footer />
      <GitHubCorner projectUrl='https://github.com/andrei-ce/' />
    </QuizBackground>
  );
};

export default Home;
