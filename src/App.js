import Login from './components/Login'

import Home from './components/Home.jsx'

import Content from './components/Content'
import Navbar from './components/Navbar.jsx';
import TinySidebar from './components/TinySidebar.jsx';

function App() {
  return (
    <>
    {/* <Login/> */}
    <div className="App">
      <Navbar/>
      <Home/>
      <TinySidebar/>
      <Content/>

      {/* <div className="w-100 d-flex align-items-stretch">
        <Sidebar />
        <Content />
      </div> */}
    </div>
</>


    
  );
}

export default App;
