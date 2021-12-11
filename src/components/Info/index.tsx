import { Grid, Text } from '@chakra-ui/react';
import Bio from './Bio';
import Info from './Info';

export default function Infos() {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={['8', '20']}
    >
      <Bio />
      <Info />
    </Grid>
  );
}
