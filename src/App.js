import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UserList from './Components/UserList';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/register" element={<Signup/>}></Route>  
        <Route path="/user-list" element={<UserList/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
