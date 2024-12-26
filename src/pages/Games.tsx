import Layout from "@/components/Layout";
import Game2048 from "@/components/games/Game2048";

const Games = () => {
  return (
    <Layout>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold mb-6">2048 Game</h1>
        <Game2048 />
      </div>
    </Layout>
  );
};

export default Games;