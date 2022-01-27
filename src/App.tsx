import { LifeGameField } from './components/LifeGameField';

function App() {
  return (
    <div className="font-orbitron">
      <LifeGameField />
      <div className="fixed right-8 bottom-8 text-slate-200 text-right flex flex-col gap-4">
        <a href="https://github.com/kj455">Github</a>
        <a href="https://twitter.com/kj4555">Twitter</a>
        <h1 className="text-slate-200 text-3xl">Ibuki Kaji</h1>
      </div>
    </div>
  );
}

export default App;
