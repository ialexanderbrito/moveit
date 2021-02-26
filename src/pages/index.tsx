import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';

import { Container } from '../styles/pages/index';

import Head from 'next/head';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | move.It</title>
      </Head>
      <Container>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Container>
    </>
  );
}
