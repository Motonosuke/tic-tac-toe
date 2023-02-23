import * as z from 'zod';

const zTicTacToePlayerScheme = z.union([z.literal('X'), z.literal('O'), z.literal('')]);
export type TicTacToePlayer = z.infer<typeof zTicTacToePlayerScheme>;

const zTicTacToeGameBoardScheme = z.array(z.array(zTicTacToePlayerScheme));
export type TicTacToeGameBoard = z.infer<typeof zTicTacToeGameBoardScheme>;
