import { Flex, Grid, Image, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link';

export default function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';

  return (
    <Flex
      as="header"
      w="100%"
      h={['50px', '100px']}
      mx="auto"
      px="1rem"
      bg="white"
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
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
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
