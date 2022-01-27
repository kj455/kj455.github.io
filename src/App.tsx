import { Footer } from './components/Footer';
import { LifeGameField } from './components/LifeGameField';

function App() {
  return (
    <div className="font-orbitron">
      <LifeGameField />
      <div className="fixed right-8 bottom-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;
