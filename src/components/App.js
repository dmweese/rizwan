import Header from './header/Header'
import Tophero from './tophero/Tophero'
import './App.css';
import Bottomhero from './bottomhero/Bottomhero';
import {CardProvider} from './CardContext'
function App() {
  return (
  <CardProvider>
    <div className="App">
      <Header />
      <Bottomhero/>
    </div>
  </CardProvider>
  );
}

export default App;
