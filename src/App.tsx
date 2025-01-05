import MainPage from './pages/Main/mainPage';
import { CardType } from './types/CardType';

type AppProps = {
  cards: CardType[];
};
function App({ cards }: AppProps) {
  return <MainPage cards={cards} />;
}

export default App;
