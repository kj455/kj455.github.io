import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LifeGameField } from './components/LifeGameField';

function App() {
  return (
    <div className="font-orbitron overflow-hidden">
      <LifeGameField />
      <div className="fixed top-8 left-8">
        <Header />
      </div>
      <div className="fixed right-8 bottom-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;
