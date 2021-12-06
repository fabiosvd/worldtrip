import { Flex, Heading, Text, Image } from '@chakra-ui/react';

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={['163px', '264px', '264px', '335px']}
      bgImage="url('/banner.jpg')"
      bgPosition={['100% 20%', '100% 20%', '100% 26%']}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <div>
          <Heading
            fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}
            fontWeight="500"
            color="gray.100"
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            maxW={['100%', '100%', '100%', '550px']}
            fontSize={['0.8rem', 'xl']}
            color="gray.300"
            mt="5"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
        <Image
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          src="/airplane.svg"
          alt="Avião voando entre nuvens."
          ml="8"
          transform="translateY(55px)"
        />
      </Flex>
    </Flex>
  );
}
