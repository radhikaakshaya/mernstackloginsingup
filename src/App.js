import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage'
import HomePage from './Pages/HomePage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
       <ToastContainer position="top-center" />
     <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegistrationPage/>}/>
      <Route path='/home' element={<HomePage/>}>
      <Route path=':topics' element={<HomePage/>}/>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
