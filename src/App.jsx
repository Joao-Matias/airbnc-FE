import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';

const apiKey = process.env.API_KEY;

function App() {
  // axios
  //   .get('https://irmeohnkzcyspiqkwyjb.supabase.co/rest/v1/properties', {
  //     headers: {
  //       apikey: apiKey,
  //     },
  //   })
  //   .then(({ data }) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <div>
      <h1>AirBnb</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
