import { FC } from 'react';

import { Box, Center } from 'components/chakra-parts/Layout';
import { Heading } from 'components/chakra-parts/Typography';
import { Game } from 'features/tic-tac-toe/components/Game';

export const HomePage: FC = () => {
  return (
    <Box>
      <Heading order={1} textAlign="center">
        Tic Tac Toe
      </Heading>
      <Center mt={20}>
        <Game />
      </Center>
    </Box>
  );
};
