import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Input from '../src/components/Inpuut';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import { motion } from 'framer-motion';


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
        <Widget 
          as = {motion.section}
          transition = {{delay:0, duration:0.5}}
          variants ={{
            show: {opacity: 1, y:'0'},
            hidden: {opacity: 0, y: '100%'},
          }}
          initial = "hidden"
          animate = "show"
        >
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
        {/* <Widget
          as = {motion.section}
          transition ={{delay: 0.5,duration: 0.5}}
          variants ={{
            show: {opacity: 1, y:'0'},
            hidden: {opacity: 0, y: '100%'},
          }}
          initial = "hidden"
          animate = "show"
        >
          <Widget.Content>
            <h1>Minhas Redes</h1>
            <ul>
            {db.external.map((linkExterno) => {
              const [projectName, githubUser] = linkExterno
              .replace(/\//g,'')
              .replace('https:','')
              .replace('.vercel.app','')
              .split('.')
              return (
              <li key = {linkExterno}>
                <Widget.Topic
                   as = {Link}
                   href= {`/quiz/${projectName}___${githubUser}`}>
                   {`${githubUser}/${projectName}`}
                </Widget.Topic>
              </li>
              );
            })}
            </ul>
          </Widget.Content>  
        </Widget> */}

        {/* <Footer/> */}
      </QuizContainer> 
      <GitHubCorner projectUrl = "https://github.com/carolfons"/>
    </QuizBackground>
  );
}
