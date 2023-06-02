import { GlobalStyle } from './style-components/global/index.js';
import { Header } from './components/header/index.jsx';
import { Home } from './pages/home/index.jsx';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}
