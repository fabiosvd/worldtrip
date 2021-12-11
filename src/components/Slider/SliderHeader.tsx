import { Heading } from '@chakra-ui/react';

export default function SliderHeader() {
  return (
    <Heading
      textAlign="center"
      fontWeight="500"
      mb={['5', '14']}
      fontSize={['lg', '3xl', '4xl']}
    >
      Vamos nessa?
      <br />
      Então escolha seu continente
    </Heading>
  );
}
