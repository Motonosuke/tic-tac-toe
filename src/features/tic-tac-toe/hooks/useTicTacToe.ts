import { useCallback, useState } from 'react';

import { TicTacToeGameBoard, TicTacToePlayer } from '../types';

export const useTicTacToe = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialGameBoard: TicTacToeGameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  const [gameBoard, setGameBoard] = useState<TicTacToeGameBoard>(initialGameBoard);
  const [currentPlayer, setCurrentPlayer] = useState<TicTacToePlayer>('X');

  const handleSquareClick = useCallback(
    (row: number, column: number) => {
      if (gameBoard[row][column] !== '') {
        return;
      }

      const newGameBoard = [...gameBoard];
      newGameBoard[row][column] = currentPlayer;
      setGameBoard(newGameBoard as TicTacToeGameBoard);

      const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
      setCurrentPlayer(nextPlayer);
    },
    [gameBoard, currentPlayer],
  );

  const handleResetGame = useCallback(() => {
    setGameBoard(initialGameBoard);
    setCurrentPlayer('X');
  }, [initialGameBoard]);

  const handleCheckForWinner = (board: TicTacToeGameBoard): TicTacToePlayer | null => {
    // Check rows
    for (let row = 0; row < 3; row++) {
      if (board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
        return board[row][0];
      }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
        return board[0][col];
      }
    }

    // Check diagonals
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return board[0][0];
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return board[0][2];
    }

    // No winner
    return null;
  };

  return { currentPlayer, gameBoard, handleCheckForWinner, handleResetGame, handleSquareClick };
};
