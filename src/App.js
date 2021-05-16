import './App.css';

import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <div className="wrapper d-flex align-items-stretch">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
