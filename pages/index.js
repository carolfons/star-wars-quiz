import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Input from '../src/components/Input';
import Button from '../src/components/Button';

import Head from 'next/head';
import {Router, useRouter} from 'next/router';
 

  // const BackgroundImage = styled.div`
  //   background-image: url(${db.bg});
  //   flex: 1;
  //   background-size: cover;
  //   background-position: center;

  // `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width:350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin:auto;
    padding:15px;
  }
`;


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Star Wars Quiz</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Star Wars</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento){
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <Input 
              name = 'nomeDoUsuario'
              onChange = {function(infosDoEvento){
                //State
                setName(infosDoEvento.target.value);
              }}
              placeholder='Digitar seu nome voce deve'
              value = {name}
              />
              
              <Button type = 'submit' disabled={name.length === 0}>
                {`Padawan ${name}`}
              </Button>
            </form>
          </Widget.Content>
      
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Outros Quizes</h1>
            <p>Lorem ipsum dolor sit amet!</p>
          </Widget.Content>  
        </Widget>

        {/* <Footer/> */}
      </QuizContainer> 
      <GitHubCorner projectUrl = "https://github.com/carolfons"/>
    </QuizBackground>
  );
}
