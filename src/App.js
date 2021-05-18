import './style/App.css';
import './style/Sidebar.css';
import './style/News.css';
import './style/Quotation.css';
import './style/Team.css';

import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {
  return (
    <div className="App">
      <div className="w-100 d-flex align-items-stretch">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
