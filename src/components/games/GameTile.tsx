interface GameTileProps {
  value: number;
  getTileColor: (value: number) => string;
}

const GameTile = ({ value, getTileColor }: GameTileProps) => {
  return (
    <div
      className={`${
        getTileColor(value)
      } w-16 h-16 flex items-center justify-center rounded-lg text-2xl font-bold transition-colors duration-100 ${
        value === 0 ? "text-transparent" : "text-gray-800"
      }`}
    >
      {value || 0}
    </div>
  );
};

export default GameTile;