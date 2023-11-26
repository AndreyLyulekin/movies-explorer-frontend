import { Header, FirstScreen, About, Tech } from './index.js';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <FirstScreen />
        <About />
        <Tech />
      </main>
    </div>
  );
}
