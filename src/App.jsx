import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home';
import SingleProperty from './singleProperty';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/properties/:id' element={<SingleProperty />} />
      </Routes>
    </div>
  );
}

export default App;
