import { FC } from 'react';

import { Button } from 'components/chakra-parts/Forms';
import { Box, HStack, Stack } from 'components/chakra-parts/Layout';
import { Text } from 'components/chakra-parts/Typography';
import { Board } from 'features/tic-tac-toe/components/Board';
import { useTicTacToe } from 'features/tic-tac-toe/hooks';

export const Game: FC = () => {
  const { currentPlayer, gameBoard, handleCheckForWinner, handleResetGame, handleSquareClick } = useTicTacToe();
  const winner = handleCheckForWinner(gameBoard);

  return (
    <HStack spacing={10}>
      <Board gameBoard={gameBoard} onSquareClick={handleSquareClick} />
      <Stack spacing={6}>
        <Box>
          <Text>Current Player: {currentPlayer}</Text>
          {winner && <Text>{winner}の勝ち</Text>}
        </Box>
        <Button onClick={handleResetGame}>Reset Game</Button>
      </Stack>
    </HStack>
  );
};
