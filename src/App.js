import './App.css';
import Home from './component/Home';
import Waiters from './component/Waiters';
import Kitchen from './component/Kitchen';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Waiters" element={<Waiters />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
