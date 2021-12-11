import { Box } from '@chakra-ui/react';

export default function Spacer() {
  return (
    <Box
      w={['60px', '90px']}
      h="2px"
      bg="gray.700"
      mx="auto"
      my={['9', '20']}
    />
  );
}
