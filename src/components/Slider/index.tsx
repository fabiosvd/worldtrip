import { Flex, Heading, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Continent from './Continent';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Slider() {
  return (
    <Flex
      w="100%"
      h={['250px', '450px']}
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Continent name="Europa" summary="O continente mais antigo." />
        </SwiperSlide>
        <SwiperSlide>
          <Continent name="Asia" summary="O maior continente" />
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
