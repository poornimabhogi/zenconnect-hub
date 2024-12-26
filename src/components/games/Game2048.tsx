import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import GameBoard from "./GameBoard";

type Board = number[][];

const Game2048 = () => {
  const { toast } = useToast();
  const [board, setBoard] = useState<Board>([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    initializeBoard();
  }, []);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!gameOver) {
        switch (event.key) {
          case "ArrowUp":
            moveBoard('up');
            break;
          case "ArrowDown":
            moveBoard('down');
            break;
          case "ArrowLeft":
            moveBoard('left');
            break;
          case "ArrowRight":
            moveBoard('right');
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [board, gameOver]);

  const initializeBoard = () => {
    const newBoard = Array(4).fill(0).map(() => Array(4).fill(0));
    addNewTile(newBoard);
    addNewTile(newBoard);
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
  };

  const addNewTile = (currentBoard: Board) => {
    const emptyCells = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (currentBoard[i][j] === 0) {
          emptyCells.push({ i, j });
        }
      }
    }
    if (emptyCells.length > 0) {
      const { i, j } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      currentBoard[i][j] = Math.random() < 0.9 ? 2 : 4;
    }
  };

  const moveBoard = (direction: 'up' | 'down' | 'left' | 'right') => {
    const newBoard = JSON.parse(JSON.stringify(board));
    let moved = false;
    let newScore = score;

    const merge = (row: number[]) => {
      const newRow = row.filter(cell => cell !== 0);
      for (let i = 0; i < newRow.length - 1; i++) {
        if (newRow[i] === newRow[i + 1]) {
          newRow[i] *= 2;
          newScore += newRow[i];
          newRow.splice(i + 1, 1);
        }
      }
      while (newRow.length < 4) newRow.push(0);
      return newRow;
    };

    if (direction === 'left' || direction === 'right') {
      for (let i = 0; i < 4; i++) {
        const row = newBoard[i];
        const originalRow = [...row];
        const newRow = direction === 'left' ? 
          merge([...row]) : 
          merge([...row].reverse()).reverse();
        newBoard[i] = newRow;
        if (JSON.stringify(originalRow) !== JSON.stringify(newRow)) moved = true;
      }
    } else {
      for (let j = 0; j < 4; j++) {
        const column = newBoard.map(row => row[j]);
        const originalColumn = [...column];
        const newColumn = direction === 'up' ? 
          merge([...column]) : 
          merge([...column].reverse()).reverse();
        for (let i = 0; i < 4; i++) newBoard[i][j] = newColumn[i];
        if (JSON.stringify(originalColumn) !== JSON.stringify(newColumn)) moved = true;
      }
    }

    if (moved) {
      addNewTile(newBoard);
      setBoard(newBoard);
      setScore(newScore);
      checkGameOver(newBoard);
    }
  };

  const checkGameOver = (currentBoard: Board) => {
    const isFull = currentBoard.every(row => row.every(cell => cell !== 0));
    if (!isFull) return;

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const current = currentBoard[i][j];
        if (
          (i < 3 && current === currentBoard[i + 1][j]) ||
          (j < 3 && current === currentBoard[i][j + 1])
        ) {
          return;
        }
      }
    }

    setGameOver(true);
    toast({
      title: "Game Over!",
      description: `Final Score: ${score}`,
    });
  };

  const getTileColor = (value: number) => {
    const colors: { [key: number]: string } = {
      2: "bg-gray-200",
      4: "bg-gray-300",
      8: "bg-orange-200",
      16: "bg-orange-300",
      32: "bg-orange-400",
      64: "bg-orange-500",
      128: "bg-yellow-200",
      256: "bg-yellow-300",
      512: "bg-yellow-400",
      1024: "bg-yellow-500",
      2048: "bg-yellow-600",
    };
    return colors[value] || "bg-yellow-700";
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="flex justify-between items-center w-full max-w-md mb-4">
        <div className="text-2xl font-bold">Score: {score}</div>
        <Button onClick={initializeBoard}>New Game</Button>
      </div>

      <Card className="p-4 bg-gray-100">
        <GameBoard
          board={board}
          getTileColor={getTileColor}
          onMove={moveBoard}
        />
      </Card>

      {gameOver && (
        <div className="mt-4 text-xl font-bold text-red-500">
          Game Over! Final Score: {score}
        </div>
      )}
    </div>
  );
};

export default Game2048;