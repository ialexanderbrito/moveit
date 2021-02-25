import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import { Container } from '../styles/pages/index';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | move.It</title>
      </Head>
      <Container>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div></div>
        </section>
      </Container>
    </>
  );
}
