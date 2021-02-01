import React, { useState, useEffect } from 'react';
import ContentLoader from 'react-content-loader';
import { useRouter } from 'next/router';

// import db from '../../../db.json';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import QuizContainer from '../../components/QuizContainer';
import CustomBtn from '../../components/CustomBtn';
import AlternativesForm from '../../components/AlternativesForm';
import BackLinkArrow from '../../components/BackLinkArrow';

// <<<< Local Components (START) >>>>:
const LoadingCard = () => {
  return (
    <Card>
      <Card.Header>Carregando...</Card.Header>
      <ContentLoader
        speed={2}
        width={400}
        height={360}
        viewBox='0 0 400 360'
        backgroundColor='rgba(40,40,40,0.8)'
        foregroundColor='rgba(60,60,60, 0.8)'>
        <rect x='24' y='71' rx='2' ry='2' width='306' height='13' />
        <rect x='24' y='28' rx='0' ry='0' width='308' height='39' />
        <rect x='23' y='92' rx='0' ry='0' width='167' height='13' />
        <rect x='41' y='120' rx='0' ry='0' width='269' height='44' />
        <rect x='42' y='171' rx='0' ry='0' width='268' height='42' />
        <rect x='43' y='286' rx='0' ry='0' width='267' height='44' />
        <rect x='43' y='221' rx='0' ry='0' width='268' height='42' />
      </ContentLoader>
    </Card>
  );
};

const ResultsCard = ({ results, totalQuestions }) => {
  const totalRight = results.reduce((acc, cur) => acc + cur);
  const router = useRouter();
  const { name } = router.query;

  return (
    <Card>
      <Card.Header>
        {' '}
        <h1>🎉 Parabéns {name} 🎉</h1>
      </Card.Header>
      <Card.Content>
        {totalRight >= totalQuestions ? (
          <>
            <p>🎊 🎊 🎊 Você zerou o Quiz!🎊 🎊 🎊 </p>
            <p>
              Ja pensou em ser <strong>Dungeon Master</strong>?{' '}
            </p>
            <hr />
          </>
        ) : (
          <>
            <p>
              Você acertou {totalRight} de {totalQuestions}! Mas independente disso,
              para jogar D&D so precisa de vontade, amigos e imaginção!{' '}
            </p>
            <p>Veja alguns videos, compre um starter pack, e chame a galera!</p>
            <hr />
          </>
        )}
        <ul>
          {results.map((value, i) => (
            <li key={i}>
              Pergunta #{i + 1}: {value === 1 ? `✅` : `❌`}
            </li>
          ))}
        </ul>
      </Card.Content>
    </Card>
  );
};

// Local Component
const QuestionCard = ({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) => {
  const [selectedAlt, setSelectedAlt] = useState(undefined);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const isCorrect = selectedAlt === question.answer;
  const hasSelectedAlt = selectedAlt !== undefined;
  const questionId = `question__${questionIndex}`;

  const handleSubmitQuiz = (e) => {
    e.preventDefault();
    setIsQuestionSubmitted(true);
    setTimeout(() => {
      addResult(isCorrect ? 1 : 0);
      onSubmit();
      setIsQuestionSubmitted(false);
      setSelectedAlt(undefined);
    }, 500);
  };

  return (
    <Card>
      <Card.Header>
        <BackLinkArrow href='/' />
        <h3>
          Pergunta {questionIndex + 1} de {totalQuestions}
        </h3>
      </Card.Header>
      <img
        alt='descrição'
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Card.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <AlternativesForm autoComplete='off' onSubmit={(e) => handleSubmitQuiz(e)}>
          {/* <pre>{JSON.stringify(question.alternatives, null, 4)}</pre> */}
          {question.alternatives.map((alternative, i) => {
            const alternativeId = `alternative__${i}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlt === i;
            return (
              <Card.Topic
                key={i}
                as='label'
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}>
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type='radio'
                  onChange={() => setSelectedAlt(i)}
                />
                {' ' + alternative}
              </Card.Topic>
            );
          })}
          <div style={{ display: 'flex' }}>
            <CustomBtn type='submit' color='normal' disabled={!hasSelectedAlt}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <i
                  className='fa fa-check'
                  aria-hidden='true'
                  style={{ fontSize: 20, paddingRight: 10 }}
                />
                <span>Confirmar</span>
              </div>
            </CustomBtn>
          </div>
        </AlternativesForm>
      </Card.Content>
    </Card>
  );
};
// <<<< Local Components (END) >>>>:

// <<<< Main Component STATES >>>>:
const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

// <<<< Main Component >>>>:
const Quiz = ({ externalDb }) => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const question = externalDb.questions[questionIndex];
  const totalQuestions = externalDb.questions.length;

  const addResult = (result) => {
    setResults([...results, result]);
  };

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1800);
  }, []);

  const handleSubmit = (e) => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion >= totalQuestions) {
      setScreenState(screenStates.RESULT);
    } else {
      setQuestionIndex(nextQuestion);
    }
  };

  return (
    <QuizBackground backgroundImage={externalDb.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.LOADING && <LoadingCard />}
        {screenState === screenStates.QUIZ && (
          <QuestionCard
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={questionIndex}
            onSubmit={handleSubmit}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.RESULT && (
          <ResultsCard totalQuestions={totalQuestions} results={results} />
        )}
      </QuizContainer>
      <Footer />
      <GitHubCorner projectUrl='https://github.com/andrei-ce/' />
    </QuizBackground>
  );
};

export default Quiz;
