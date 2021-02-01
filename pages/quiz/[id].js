import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

const QuizDaGaleraPage = ({ externalDb }) => {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <QuizScreen externalDb={externalDb} />
      {/* <pre>{JSON.stringify(externalDb, null, 4)}</pre> */}
    </ThemeProvider>
  );
};

export default QuizDaGaleraPage;

// >> SERVER SIDE RENDERING/PROPS <<
// https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering

// Por padrao next pre-renderiza todas as paginas
// nextjs faz server side rendering &&
// gera arquivos estaticos (pre-renderiza o minimo do js que precisa para aparecer a tela)

// Sempre que receber uma chamada via essa url via servidor,
// esta pagina vai rodar este codigo no backend
export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');
  let externalDb = {};

  try {
    const apiResponse = await fetch(
      `https://${projectName}.${githubUser}.vercel.app/api/db`
    );
    if (apiResponse.ok) {
      externalDb = await apiResponse.json();
    } else {
      throw new Error(`Error loading quiz database: status ${apiResponse.status}`);
    }
    return {
      props: {
        externalDb,
      }, // will be passed to the page component as props argument
    };
  } catch (error) {
    console.log(error);
  }
}
