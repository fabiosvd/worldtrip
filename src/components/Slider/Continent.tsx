import { Flex, Heading, Text, Link } from '@chakra-ui/react';

interface ContinentProps {
  name: string;
  summary: string;
}

export default function Continent({ name, summary }: ContinentProps) {
  return (
    <Link href="/continent">
      <a>
        <Flex
          w="100%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
          bgImage={`url('/${name}.png')`}
          bgPosition="100% 30%"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <Heading
            fontSize={['3xl', '4xl', '5xl']}
            fontWeight="bold"
            color="gray.100"
          >
            {name}
          </Heading>
          <Text
            fontSize={['0.8rem', '1xl', '2xl']}
            fontWeight="bold"
            color="gray.300"
            mt={['2', '4']}
          >
            {summary}
          </Text>
        </Flex>
      </a>
    </Link>
  );
}
