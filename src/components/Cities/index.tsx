import { Grid, Heading } from '@chakra-ui/react';
import City from './City';

export default function Cities() {
  return (
    <>
      <Heading fontWeight="500" fontSize={['2xl', '4xl']} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
        px={['30px', '0']}
      >
        <City
          name="Londres"
          country="Reino Unido"
          flag="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/290px-Flag_of_the_United_Kingdom.svg.png"
          image="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
        />
        <City
          name="Paris"
          country="França"
          flag="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/35px-Flag_of_France.svg.png"
          image="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg"
        />
        <City
          name="Roma"
          country="Itália"
          flag="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/35px-Flag_of_Italy.svg.png"
          image="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/ed/70/8f.jpg"
        />
        <City
          name="Praga"
          country="Republica Tcheca"
          flag="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/35px-Flag_of_the_Czech_Republic.svg.png"
          image="https://bigseventravel.com/wp-content/uploads/2019/03/anthony-delanoix-575672-unsplash-1024x683.jpg"
        />
        <City
          name="Amsterdã"
          country="Holanda"
          flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/35px-Flag_of_the_Netherlands.svg.png"
          image="https://bigseventravel.com/wp-content/uploads/2019/03/ramida-made-1356094-unsplash-1024x683.jpg"
        />
      </Grid>
    </>
  );
}
