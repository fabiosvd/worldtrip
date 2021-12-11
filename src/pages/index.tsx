import { Flex } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Cards from '../components/Cards/index';
import Header from '../components/Header';
import Slider from '../components/Slider';
import SliderHeader from '../components/Slider/SliderHeader';
import Spacer from '../components/Spacer';

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Cards />
      <Spacer />
      <SliderHeader />
      <Slider />
    </Flex>
  );
}
