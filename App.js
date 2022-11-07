import './App.css';
import { Routes, Route} from 'react-router-dom';
import Form from './components/login';
import Image1 from './home';
import Signup from './components/signup';
// import BasicTable from './components/schedule';

function App() {
  return (
        <Routes>
            <Route path='/' element={<Form/>}></Route>
            <Route path='/Home' element={<Image1/>}></Route>
            <Route path='/Signup' element={<Signup/>}></Route>
        </Routes>
  );
}

export default App;
