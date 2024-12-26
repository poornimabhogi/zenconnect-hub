import GameTile from './GameTile';
import { useSwipe } from '@/hooks/use-swipe';

interface GameBoardProps {
  board: number[][];
  getTileColor: (value: number) => string;
  onMove: (direction: 'up' | 'down' | 'left' | 'right') => void;
}

const GameBoard = ({ board, getTileColor, onMove }: GameBoardProps) => {
  const { handleTouchStart, handleTouchEnd } = useSwipe({
    onSwipeLeft: () => onMove('left'),
    onSwipeRight: () => onMove('right'),
    onSwipeUp: () => onMove('up'),
    onSwipeDown: () => onMove('down'),
  });

  return (
    <div 
      className="grid grid-cols-4 gap-2 w-full max-w-md"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {board.map((row, i) =>
        row.map((cell, j) => (
          <GameTile
            key={`${i}-${j}`}
            value={cell}
            getTileColor={getTileColor}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;