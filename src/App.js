import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Header from './Header';

function App() {
  return (
    <div className="App" style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black'}}>
      <Header></Header>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
