import { Button } from 'components/chakra-parts/Forms';
import { Box } from 'components/chakra-parts/Layout';
import { TicTacToeGameBoard } from 'features/tic-tac-toe/types';

interface Props {
  gameBoard: TicTacToeGameBoard;
  onSquareClick: (row: number, column: number) => void;
}

export const Board: React.FC<Props> = ({ gameBoard, onSquareClick }) => {
  return (
    <Box>
      {gameBoard.map((row, rowIndex) => (
        <Box key={rowIndex}>
          {row.map((square, columnIndex) => (
            <Button
              height="60px"
              key={columnIndex}
              onClick={() => onSquareClick(rowIndex, columnIndex)}
              variant="outline"
              width="60px"
            >
              {square}
            </Button>
          ))}
        </Box>
      ))}
    </Box>
  );
};
