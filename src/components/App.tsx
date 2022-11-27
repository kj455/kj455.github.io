import { LifeGameField } from 'react-life-game';
import { Footer } from './Footer';
import { Header } from './Header';
import { useColorScheme } from '../hooks/useColorScheme';

function App() {
  const colorScheme = useColorScheme();
  return (
    <div className="font-orbitron overflow-hidden">
      <LifeGameField
        option={{
          aliveColor: colorScheme === 'dark' ? '#1e3a8a' : 'turquoise',
          deadColor: colorScheme === 'dark' ? '#0f172b' : 'whitesmoke',
        }}
      />
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
