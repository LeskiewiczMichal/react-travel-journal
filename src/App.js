import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from "./data"

function App() {
  const cards = data.map((item) => {
    return <Card
      id={item.title}
      item={item}
      />
  })

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
