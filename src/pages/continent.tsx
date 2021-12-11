import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import Cities from '../components/Cities';
import ContinentBanner from '../components/ContinentBanner';
import Header from '../components/Header';
import Infos from '../components/Info/index';

export default function Continent() {
  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - Europa</title>
      </Head>

      <Header />
      <ContinentBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Infos />
        <Cities />
      </Flex>
    </Flex>
  );
}
