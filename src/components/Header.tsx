import { Flex, Grid, Image } from '@chakra-ui/react';

export default function Header() {
  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      h={['50px', '100px']}
      mx="auto"
      px="1rem"
      align="center"
      justify="center"
    >
      <Grid
        w="100%"
        h="100%"
        maxW="1160px"
        mx="auto"
        alignItems="center"
        alignSelf="start"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          w={['81px', '184px']}
          src="/logo.svg"
          alt="Avião decolando pela marca worldtrip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
